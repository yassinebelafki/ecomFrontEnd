import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemPopupComponent } from './cart-item-popup.component';

describe('CartItemPopupComponent', () => {
  let component: CartItemPopupComponent;
  let fixture: ComponentFixture<CartItemPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartItemPopupComponent]
    });
    fixture = TestBed.createComponent(CartItemPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
