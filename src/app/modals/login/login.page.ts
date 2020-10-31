import { Storage } from '@ionic/storage';
import { Component, OnInit, ApplicationRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/providers/config/config.service';
import { ModalController, NavController, NavParams, Platform } from '@ionic/angular';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { SignUpPage } from '../sign-up/sign-up.page';
import { ForgotPasswordPage } from '../forgot-password/forgot-password.page';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { LoadingService } from 'src/providers/loading/loading.service';
import { AppEventsService } from 'src/providers/app-events/app-events.service';
import { retry } from 'rxjs/operators';
import { HTTP } from '@ionic-native/http/ngx';

declare var SignInWithApple: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  hideGuestLogin = false;
  formData = { username: '', password: '' };
  errorMessage = '';
  constructor(
    public http: HttpClient,
    public config: ConfigService,
    public modalCtrl: ModalController,
    public loading: LoadingService,
    public shared: SharedDataService,
    private fb: Facebook,
    private applicationRef: ApplicationRef,
    public navCtrl: NavController,
    public appEventsService: AppEventsService,
    public navParams: NavParams,
    private nativeHttp: HTTP,
    private storage: Storage,
    private plt: Platform
  ) {
    this.hideGuestLogin = navParams.get('hideGuestLogin');
    console.log(this.hideGuestLogin);
  }
  // <!-- 2.0 updates -->
  guestLogin() {
    if (this.config.checkOutPage == 1)
      this.shared.onePageCheckOut();
    else
      this.appEventsService.publish('openShippingAddressPage', "");

    this.dismiss();
  }

  login() {
    this.loading.show();
    this.errorMessage = '';
    var formData = new FormData();
    formData.append("username", this.formData.username);
    formData.append("password", this.formData.password);
    this.http.post(this.config.url + '/api/appusers/generate_cookie/?insecure=cool', formData).subscribe((data: any) => {
      if (data.status == "ok")
        this.getUserData(data, "simple");
      else {
        this.errorMessage = data.error;
        this.loading.hide();
      }
    }, err => {
      this.loading.hide();
      if (err.ok == false) {
        this.errorMessage = "Invalid Username or Password";
      }
    });
    // this.config.getWoo("customers/" + 118 + "?" + this.config.productsArguments).then((data:any) => {
    //   this.loading.hide();
    //   this.shared.login(data);
    //   //console.log(this.shared.customerData);
    //   this.dismiss();
    //   this.applicationRef.tick();
    // });
  }
  getUserData(c, type) {
    let id;
    if (type == "simple") id = c.user.id;
    if (type == "fb") id = c.id;
    //alert(c.user.id + " -- " + c.id + " --- " + id);
    this.config.getWoo("customers/" + id + "?" + this.config.productsArguments).then((data: any) => {
      this.loading.hide();
      let dat = data
      //alert(JSON.stringify(dat));
      this.shared.login(Object.assign({ cookie: c.cookie }, dat));
      // alert(JSON.stringify(Object.assign({ cookie: c.cookie }, dat)));
      this.dismiss();
      this.applicationRef.tick();
    });
  }
  async openSignUpPage() {
    const modal = await this.modalCtrl.create({
      component: SignUpPage
    });
    return await modal.present();
  }
  async openForgetPasswordPage() {
    const modal = await this.modalCtrl.create({
      component: ForgotPasswordPage
    });
    return await modal.present();
  }

  openAppleSignIn() {
    this.plt.ready().then(() => {
      SignInWithApple.request({requestedScopes: [ SignInWithApple.Scope.Email, SignInWithApple.Scope.FullName ]})
      .then((res) => {
        const username = this.config.getAbreviation("Mostafa", "Harb");
        this.http.get(`https://karoutexpress.com/wp-content/harb/mh_auth_verify.php?request_type=apple_authenticate&userabrv=MH&token=${res.identityToken}`, {})
        .pipe(retry(2))
        .subscribe((resData: any) => {
          if (!resData.cs && resData.cs == '' && resData.cs == undefined) {
            console.log("please try again later.");
            return;
          }
          this.loading.show();
          const postData = {
            client_id: 'com.iis.karoutExpress',
            client_secret: resData.cs,
            code: res.authorizationCode,
            grant_type: 'authorization_code'
          };
          this.nativeHttp.sendRequest('https://appleid.apple.com/auth/token', {method: 'post', data: postData, params: {}, serializer: 'urlencoded', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).then(data => {
          const reqData = JSON.parse(data.data);
            const str = new String(resData.identity.email);
            const trimmedEmail = str.split('@');
            const emailtrim = trimmedEmail[0];
            const encodedEmail = btoa(emailtrim);
            const apple_username = `apple_user_${encodedEmail}`;
            const apple_password = `${btoa(resData.identity.email)}_mh`;
            const AppleUserData = {
              refreshToken: reqData.refresh_token
            };
            console.log('reqData object', reqData);  
            this.http.get(this.config.url + '/api/get_nonce/?controller=appusers&method=register').subscribe((cusRes: any) => {
              console.log('cusRes', cusRes);
              const f_display = res.fullName.givenName ? res.fullName.givenName : 'Alsi';
              const l_display = res.fullName.familyName ? res.fullName.familyName : 'User';
              const registerData = {
                username: apple_username,
                email: resData.identity.email,
                display_name: f_display + " " + l_display,
                nonce: cusRes.nonce,
                password: apple_password,
                first_name: f_display,
                last_name: l_display
              };
              console.log('registerData object ', registerData);
              return this.appleAccountRegister(registerData, AppleUserData);
            });
  
           
          }).catch(error => {
            this.loading.hide();
            console.log(error);
            console.log(error.status);
            console.log(error.error);
            console.log(error.headers);
          });
        },err => {
          console.log(JSON.stringify(err));
          this.loading.hide();
        });
      })
        .catch((error) => {
          if (error.code === 1000) {
            this.shared.showAlert('An error occured, please try agin later');
          }
        });
      });
  }

  appleAccountRegister(dat, cusToken) {
    console.log('first data', dat);
    const formData = new FormData();
    formData.append("username", dat.username);
    formData.append("email", dat.email);
    formData.append("display_name", dat.display_name);
    formData.append("nonce", dat.nonce);
    formData.append("password", dat.password);
    formData.append("first_name", dat.first_name);
    formData.append("last_name", dat.last_name);
    return this.http.post(this.config.url + '/api/appusers/register/?insecure=cool', formData).subscribe((data: any) => {
      console.log('data', data);
      if (data.status == "ok") {
        return this.appleAccountLogin(dat, cusToken);
      }
    }, err => {
      if (err.ok == false && err.error.error.trim() === 'This username Already Exist' || err.ok == false && err.error.error.trim() === 'This Email Already exist') {
        return this.appleAccountLogin(dat, cusToken);
      } else {
        this.shared.showAlert('Connection error occured, please try agin later');
        this.loading.hide();
      }
    });
  }


  appleAccountLogin(dat, cusToken) {
    console.log('register data', dat);
    var formData = new FormData();
    formData.append("username", dat.email);
    formData.append("password", dat.password);
    return this.http.post(this.config.url + '/api/appusers/generate_cookie/?insecure=cool', formData).subscribe((data: any) => {
      if (data.status == "ok") {
        this.storage.set('signin_method', 'apple').then(() => {
          this.storage.set('apple_signin_cred', cusToken).then(() => {
            this.config.refreshToken();
            return this.getAppleUserData(data);
          });
        });
      }
    }, err => {
      this.shared.showAlert('invalid proccess, this email is already manually registered');
      this.loading.hide();
    });
  }

  getAppleUserData(c) {
    console.log('c', c);
    const id = c.user.id;
    return this.config.getWoo("customers/" + id + "?" + this.config.productsArguments).then((data: any) => {
      let dat = data
      this.shared.login(Object.assign({ cookie: c.cookie }, dat));
      this.loading.hide();
      this.dismiss();
    });
  }

  facebookLogin() {
    this.fb.getLoginStatus().then((res: any) => {
      if (res.status == 'connected') {
        console.log("user connected already" + res.authResponse.accessToken);
        this.createAccount(res.authResponse.accessToken, 'fb');

      }
      else {
        console.log("USer Not login ");
        this.fb.login(['public_profile', 'user_friends', 'email'])
          .then((res: FacebookLoginResponse) => {
            // this.shared.showAlert('Logged into Facebook!' + JSON.stringify(res));
            console.log("successfully login ");
            this.createAccount(res.authResponse.accessToken, 'fb');
          })
          .catch(e => console.log('Error logging into Facebook' + JSON.stringify(e)));
      }
    }).catch(e => console.log('Error Check Login Status Facebook' + JSON.stringify(e)));
  }

  // googleLogin() {
  //   this.loading.autoHide(500);
  //   this.googlePlus.login({})
  //     .then(res => {
  //       //  alert(JSON.stringify(res))
  //       this.createAccount(res, 'google');
  //     })
  //     .catch(err => this.shared.showAlert(JSON.stringify(err)));
  // }
  //============================================================================================  
  //creating new account using function facebook or google details 
  createAccount(info, type) {
    //this.formData.username = info;
    // alert(info);
    this.loading.show();
    var url = '';
    url = '/api/appusers/fb_connect/?insecure=cool&access_token=' + info;


    this.http.get(this.config.url + url).subscribe((data: any) => {
      this.loading.hide();
      //alert(JSON.stringify(data));
      this.getUserData(data, "fb");

    }, error => {
      this.loading.hide();
      //this.shared.showAlert("error " + JSON.stringify(error));
    });
  };
  //close modal
  dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
