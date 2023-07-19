import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { IndustriesComponent } from './industries/industries.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareerComponent } from './career/career.component';
import { HomeComponent } from './home/home.component';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';
import { IosPageComponent } from './ios-page/ios-page.component';
import { AndroidPageComponent } from './android-page/android-page.component';
import { DappDevelopmentServicePageComponent } from './dapp-development-service-page/dapp-development-service-page.component';
import { WebDevelopmentPageComponent } from './web-development-page/web-development-page.component';
import { SoftwareDevelopmentPageComponent } from './software-development-page/software-development-page.component';
import { DataScienceAnalysticsPageComponent } from './data-science-analystics-page/data-science-analystics-page.component';
import { ITProfessionalServicesPageComponent } from './it-professional-services-page/it-professional-services-page.component';
import { EngineeringPageComponent } from './industries/engineering-page/engineering-page.component';
import { EducationPageComponent } from './industries/education-page/education-page.component';
import { ECommercePageComponent } from './industries/e-commerce-page/e-commerce-page.component';
import { OnDemandServicePageComponent } from './industries/on-demand-service-page/on-demand-service-page.component';
import { SocialMarketingPageComponent } from './industries/social-marketing-page/social-marketing-page.component';
import { SaasPageComponent } from './industries/saas-page/saas-page.component';
import { NewsPageComponent } from './industries/news-page/news-page.component';
import { GamePageComponent } from './industries/game-page/game-page.component';
import { CurrentlyHiringPageComponent } from './currently-hiring-page/currently-hiring-page.component';
const routes: Routes = [
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"services",
    component:ServicesComponent
  },
  {
    path:"testimonial",
    component:TestimonialComponent
  },
  {
    path:"industries",
    component:IndustriesComponent
  },
  {
    path:"contact",
    component:ContactUsComponent
  },
  {
    path:"career",
    component:CareerComponent
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"sign-in",
    component:SigninSignupComponent
  },
  {
    path:"service-ios",
    component:IosPageComponent
  },
  {
    path:"service-android",
    component:AndroidPageComponent
  },
  {
    path:"service-dapp-development",
    component:DappDevelopmentServicePageComponent
  },
  {
    path:"service-web-development",
    component:WebDevelopmentPageComponent
  },
  {
    path:"service-software-development",
    component:SoftwareDevelopmentPageComponent
  },
  {
    path:"service-data-science-analytic",
    component:DataScienceAnalysticsPageComponent
  },
  {
    path:"service-it-professionals",
    component:ITProfessionalServicesPageComponent
  },
  {
    path:"industries-it",
    component:IndustriesComponent
  },
  {
    path:"industries-engineering",
    component:EngineeringPageComponent
  },
  {
    path:"industries-education",
    component:EducationPageComponent
  },
  {
    path:"industries-e-commerce",
    component:ECommercePageComponent
  },
  {
    path:"industries-on-demand",
    component:OnDemandServicePageComponent
  },
  {
    path:"industries-social-marketing",
    component:SocialMarketingPageComponent
  },
  {
    path:"industries-saas",
    component:SaasPageComponent
  },
  {
    path:"industries-news",
    component:NewsPageComponent
  },
  {
    path:"industries-game",
    component:GamePageComponent
  },
  {
    path:"career-withius-currently-hiring",
    component:CurrentlyHiringPageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
