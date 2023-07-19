import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITProfessionalServicesPageComponent } from './it-professional-services-page.component';

describe('ITProfessionalServicesPageComponent', () => {
  let component: ITProfessionalServicesPageComponent;
  let fixture: ComponentFixture<ITProfessionalServicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ITProfessionalServicesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ITProfessionalServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
