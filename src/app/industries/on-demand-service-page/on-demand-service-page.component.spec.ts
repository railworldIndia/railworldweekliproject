import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDemandServicePageComponent } from './on-demand-service-page.component';

describe('OnDemandServicePageComponent', () => {
  let component: OnDemandServicePageComponent;
  let fixture: ComponentFixture<OnDemandServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnDemandServicePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnDemandServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
