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
    path:"home",
    component:HomeComponent
  },
  {
    path:"sign-in",
    component:SigninSignupComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
