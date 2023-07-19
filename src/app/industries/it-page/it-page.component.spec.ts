import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITPageComponent } from './it-page.component';

describe('ITPageComponent', () => {
  let component: ITPageComponent;
  let fixture: ComponentFixture<ITPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ITPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ITPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
