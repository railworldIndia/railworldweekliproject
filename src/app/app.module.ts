import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from "@angular/fire/compat";
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { IndustriesComponent } from './industries/industries.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareerComponent } from './career/career.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';
import {HttpClientModule} from '@angular/common/http';
import { IosPageComponent } from './ios-page/ios-page.component';
import { AndroidPageComponent } from './android-page/android-page.component';
import { DappDevelopmentServicePageComponent } from './dapp-development-service-page/dapp-development-service-page.component';
import { SoftwareDevelopmentPageComponent } from './software-development-page/software-development-page.component';
import { WebDevelopmentPageComponent } from './web-development-page/web-development-page.component';
import { DataScienceAnalysticsPageComponent } from './data-science-analystics-page/data-science-analystics-page.component';
import { ITProfessionalServicesPageComponent } from './it-professional-services-page/it-professional-services-page.component';
import { ITPageComponent } from './industries/it-page/it-page.component';
import { EngineeringPageComponent } from './industries/engineering-page/engineering-page.component';
import { OnDemandServicePageComponent } from './industries/on-demand-service-page/on-demand-service-page.component';
import { ECommercePageComponent } from './industries/e-commerce-page/e-commerce-page.component';
import { EducationPageComponent } from './industries/education-page/education-page.component';
import { SocialMarketingPageComponent } from './industries/social-marketing-page/social-marketing-page.component';
import { SaasPageComponent } from './industries/saas-page/saas-page.component';
import { NewsPageComponent } from './industries/news-page/news-page.component';
import { GamePageComponent } from './industries/game-page/game-page.component';
import { CurrentlyHiringPageComponent } from './currently-hiring-page/currently-hiring-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialComponent,
    IndustriesComponent,
    ContactUsComponent,
    CareerComponent,
    HomeComponent,
    FooterComponent,
    SigninSignupComponent,
    IosPageComponent,
    AndroidPageComponent,
    DappDevelopmentServicePageComponent,
    SoftwareDevelopmentPageComponent,
    WebDevelopmentPageComponent,
    DataScienceAnalysticsPageComponent,
    ITProfessionalServicesPageComponent,
    ITPageComponent,
    EngineeringPageComponent,
    OnDemandServicePageComponent,
    ECommercePageComponent,
    EducationPageComponent,
    SocialMarketingPageComponent,
    SaasPageComponent,
    NewsPageComponent,
    GamePageComponent,
    CurrentlyHiringPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
