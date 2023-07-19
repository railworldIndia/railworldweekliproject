import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasPageComponent } from './saas-page.component';

describe('SaasPageComponent', () => {
  let component: SaasPageComponent;
  let fixture: ComponentFixture<SaasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaasPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
