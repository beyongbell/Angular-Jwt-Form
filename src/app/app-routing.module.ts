import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from '@page/event/event.component';
import { SpecialEventsComponent } from '@page/special-events/special-events.component';
import { LoginComponent } from '@page/login/login.component';
import { RegisterComponent } from '@page/register/register.component';
import { NameComponent } from '@page/name/name.component';
import { ProfileComponent } from '@page/profile/profile.component';
import { GroupComponent } from '@page/group/group.component';
import { BuilderComponent } from '@page/builder/builder.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventComponent
  },
  {
    path: 'special',
    component: SpecialEventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'name',
    component: NameComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'group',
    component: GroupComponent
  },
  {
    path: 'builder',
    component: BuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
