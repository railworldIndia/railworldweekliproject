import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMarketingPageComponent } from './social-marketing-page.component';

describe('SocialMarketingPageComponent', () => {
  let component: SocialMarketingPageComponent;
  let fixture: ComponentFixture<SocialMarketingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMarketingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMarketingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
