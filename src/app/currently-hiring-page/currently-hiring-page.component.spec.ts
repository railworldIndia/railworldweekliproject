import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyHiringPageComponent } from './currently-hiring-page.component';

describe('CurrentlyHiringPageComponent', () => {
  let component: CurrentlyHiringPageComponent;
  let fixture: ComponentFixture<CurrentlyHiringPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentlyHiringPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentlyHiringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
