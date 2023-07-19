import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidPageComponent } from './android-page.component';

describe('AndroidPageComponent', () => {
  let component: AndroidPageComponent;
  let fixture: ComponentFixture<AndroidPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndroidPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
