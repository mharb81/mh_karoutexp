import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonContent, IonSlides, IonInfiniteScroll } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';

@Component({
  selector: 'app-home7',
  templateUrl: './home7.page.html',
  styleUrls: ['./home7.page.scss'],
})
export class Home7Page implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild('recentSlider', { static: false }) slider: IonSlides;
  @ViewChild('infinitef', { static: false }) infinitef: IonInfiniteScroll;
  @ViewChild('infinitel', { static: false }) infinitel: IonInfiniteScroll;

  segments = "deals"//first segment by default 
  scrollTopButton = false;//for scroll down fab 
  //for product slider after banner
  sliderConfig = {
    slidesPerView: this.config.productSlidesPerPage,
    spaceBetween: 0
  }

  products: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  pageFeatured = 1;
  pageSale = 1;


  constructor(
    public nav: NavController,
    public config: ConfigService,
    public shared: SharedDataService,
  ) { }

  ionViewDidEnter() {
    this.shared.hideSplashScreen();
    const slidesHeight = document.getElementById('category_slides');
    document.getElementById('category_slides_left').style.height = slidesHeight.clientHeight + 'px';
    document.getElementById('category_slides_right').style.height = slidesHeight.clientHeight + 'px';
  }
  // For FAB Scroll
  onScroll(e) {
    if (e.detail.scrollTop >= 500) {
      this.scrollTopButton = true;
    }
    if (e.detail.scrollTop < 500) {
      this.scrollTopButton = false;
    }
  }
  // For Scroll To Top Content
  scrollToTop() {
    this.content.scrollToTop(700);
    this.scrollTopButton = false;
  }
  openProducts(value) {
    this.nav.navigateForward("products/0/0/" + value);
  }

  getFeaturedProducts() {
    let query = '&page=' + this.pageFeatured;
    query = query + "&order=asc&order_by=title"
    query = query + "&featured=true";

    this.config.getWithUrl(this.config.url + '/api/appsettings/ionic_filter_products/?insecure=cool' + query).then((data: any) => {
      if (this.pageFeatured == 1) this.enableDisableInfiniteScroll('featured', true);
      if (data.data) {
        this.getFilterdFeaturedProductsFromWoo(data.data);
      }
    });

  }

  getFilterdFeaturedProductsFromWoo(listofIds) {
    if (listofIds.length == 0) {
      this.enableDisableInfiniteScroll('featured', false);
      return 0;
    }

    let q = 'products?include=' + listofIds + "&status=publish";
    q = q + "&order=asc&order_by=title"

    this.config.getWoo(q + "&" + this.config.productsArguments).then((data: any) => {
      let dat = data;
      if (dat.length != 0) {
        this.pageFeatured++;
        if (this.pageFeatured == 1) this.enableDisableInfiniteScroll('featured', true);

        for (let value of dat) {
          this.shared.tab3.push(value);
        }
      }

      if (dat.length == 0 || dat.length < 10) {
        this.enableDisableInfiniteScroll('featured', false);
      }
      this.infinitef.complete();
    });
  }


  getSaleProducts() {
    let query = '&page=' + this.pageSale;
    query = query + "&order=asc&order_by=title"
    query = query + "&on_sale=true";
    this.config.getWithUrl(this.config.url + '/api/appsettings/ionic_filter_products/?insecure=cool' + query).then((data: any) => {
      if (this.pageSale == 1) this.enableDisableInfiniteScroll('sale', true);
      if (data.data) {
        this.getFilterdSaleProductsFromWoo(data.data);
      }
    });

  }

  getFilterdSaleProductsFromWoo(listofIds) {
    if (listofIds.length == 0) {
      this.enableDisableInfiniteScroll('sale', false);
      return 0;
    }
    let q = 'products?include=' + listofIds + "&status=publish";
    q = q + "&order=asc&order_by=title"

    this.config.getWoo(q + "&" + this.config.productsArguments).then((data: any) => {
      let dat = data;
      if (dat.length != 0) {
        this.pageSale++;
        if (this.pageSale == 1) this.enableDisableInfiniteScroll('sale', true);

        for (let value of dat) {
          this.shared.tab2.push(value);
        }
      }

      if (dat.length == 0 || dat.length < 10) {
        this.enableDisableInfiniteScroll('sale', false);
      }
      this.infinitel.complete();
    });
  }

  enableDisableInfiniteScroll(type, val) {
    if (type === 'sale') {
      this.infinitel.disabled = !val;
    } else if (type === 'featured') {
      this.infinitef.disabled = !val;
    }
  }

  ngOnInit() {

  }



  ionViewWillEnter() {
    this.config.setCardStyle("15");
  }
}
