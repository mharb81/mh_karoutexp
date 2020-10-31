import { TestBed } from '@angular/core/testing';
import { SharedDataService } from './shared-data.service';
describe('SharedDataService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(SharedDataService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=shared-data.service.spec.js.map