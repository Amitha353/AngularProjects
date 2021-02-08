import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from 'src/fw/users/register-user/register-user.component';
import { SignInComponent } from 'src/fw/users/sign-in/sign-in.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { CountrySpecificListComponent } from './country-specific-list/country-specific-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { SettingsComponent } from './settings/settings.component';

// const routes: Routes = [
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'country-list/:count', component: CountryListComponent },
//   { path: 'country-detail/:country', component: CountryDetailComponent },
//   { path: 'country-maint', component: CountryMaintComponent },
//   { path: 'settings', component: SettingsComponent },
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: '**', component: DashboardComponent}
// ];

const routes: Routes = [  
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard], 
   children: [
    { path: '', canActivateChild: [AuthGuard],  
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'country-list/:count', component: CountryListComponent },
        { path: 'country-detail/:name', component: CountrySpecificListComponent },
        { path: 'country-detail/:id/:operation', component: CountryDetailComponent },
        { path: 'country-maint', component: CountryMaintComponent },
        { path: 'settings', component: SettingsComponent },
      ] }
  ]},
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
