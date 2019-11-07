import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuard } from './guard/auth.guard';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from '@service/auth.service';
import { EventService } from '@service/event.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from '@page/register/register.component';
import { LoginComponent } from '@page/login/login.component';
import { EventComponent } from '@page/event/event.component';
import { SpecialEventsComponent } from '@page/special-events/special-events.component';
import { NameComponent } from '@page/name/name.component';
import { ProfileComponent } from '@page/profile/profile.component';
import { GroupComponent } from '@page/group/group.component';
import { BuilderComponent } from '@page/builder/builder.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventComponent,
    SpecialEventsComponent,
    NameComponent,
    ProfileComponent,
    GroupComponent,
    BuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, AuthService, EventService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
