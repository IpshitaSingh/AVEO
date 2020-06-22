import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PlaybackComponent } from './playback/playback.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { WatchontvComponent } from './watchontv/watchontv.component';
import { BillingComponent } from './billing/billing.component';
import { AdvancedComponent } from './advanced/advanced.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'Account',component:AccountComponent},
  {path:'notifications',component:NotificationsComponent},
  {path:'playback',component:PlaybackComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'watchontv',component:WatchontvComponent},
  {path:'billing',component:BillingComponent},
  {path:'advanced',component:AdvancedComponent}
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
