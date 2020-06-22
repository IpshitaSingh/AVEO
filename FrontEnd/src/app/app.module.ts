import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';
import { OpenSideBarComponent } from './home/open-side-bar/open-side-bar.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PlaybackComponent } from './playback/playback.component';

import { WatchontvComponent } from './watchontv/watchontv.component';
import { BillingComponent } from './billing/billing.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OpenSideBarComponent,
    LoginComponent,
    ContentComponent,
    SignUpComponent,
    HomeComponent,
    DashboardComponent,
    AccountComponent,
    NotificationsComponent,
    PlaybackComponent,
    WatchontvComponent,
    BillingComponent,
    AdvancedComponent,
    PrivacyComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
