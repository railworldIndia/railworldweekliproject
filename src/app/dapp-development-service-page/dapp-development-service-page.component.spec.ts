import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DappDevelopmentServicePageComponent } from './dapp-development-service-page.component';

describe('DappDevelopmentServicePageComponent', () => {
  let component: DappDevelopmentServicePageComponent;
  let fixture: ComponentFixture<DappDevelopmentServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DappDevelopmentServicePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DappDevelopmentServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
