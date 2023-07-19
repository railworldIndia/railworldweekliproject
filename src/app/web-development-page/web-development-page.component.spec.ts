import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopmentPageComponent } from './web-development-page.component';

describe('WebDevelopmentPageComponent', () => {
  let component: WebDevelopmentPageComponent;
  let fixture: ComponentFixture<WebDevelopmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDevelopmentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebDevelopmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
