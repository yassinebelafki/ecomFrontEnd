import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSingleComponent } from './product-single.component';

describe('ProductSingleComponent', () => {
  let component: ProductSingleComponent;
  let fixture: ComponentFixture<ProductSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSingleComponent]
    });
    fixture = TestBed.createComponent(ProductSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
