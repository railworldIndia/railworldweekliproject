import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IosPageComponent } from './ios-page.component';

describe('IosPageComponent', () => {
  let component: IosPageComponent;
  let fixture: ComponentFixture<IosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
