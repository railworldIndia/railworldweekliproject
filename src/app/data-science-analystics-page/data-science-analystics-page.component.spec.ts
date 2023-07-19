import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScienceAnalysticsPageComponent } from './data-science-analystics-page.component';

describe('DataScienceAnalysticsPageComponent', () => {
  let component: DataScienceAnalysticsPageComponent;
  let fixture: ComponentFixture<DataScienceAnalysticsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataScienceAnalysticsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataScienceAnalysticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
