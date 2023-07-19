import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDevelopmentPageComponent } from './software-development-page.component';

describe('SoftwareDevelopmentPageComponent', () => {
  let component: SoftwareDevelopmentPageComponent;
  let fixture: ComponentFixture<SoftwareDevelopmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareDevelopmentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareDevelopmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
