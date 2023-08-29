import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutAdressComponent } from './checkout-adress.component';

describe('CheckoutAdressComponent', () => {
  let component: CheckoutAdressComponent;
  let fixture: ComponentFixture<CheckoutAdressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutAdressComponent]
    });
    fixture = TestBed.createComponent(CheckoutAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
