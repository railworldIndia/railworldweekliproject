import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommercePageComponent } from './e-commerce-page.component';

describe('ECommercePageComponent', () => {
  let component: ECommercePageComponent;
  let fixture: ComponentFixture<ECommercePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECommercePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECommercePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
