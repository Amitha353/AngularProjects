import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FwModule } from 'src/fw/fw.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountriesComponent } from './countries/countries.component';
import { SettingsComponent } from './settings/settings.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserApi } from 'src/fw/users/user-api';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth-guard.service';
import { AppDataService } from './services/app-data.service';
import { CountryPanelComponent } from './panels/country-panel/country-panel.component';
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';
import { CountrySpecificListComponent } from './country-specific-list/country-specific-list.component';
import { AppCountryDataService } from './services/app-country-data.service';
import { CountrySpecificPanelComponent } from './panels/country-specific-panel/country-specific-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountriesComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent,
    AuthenticatedUserComponent,
    CountryPanelComponent,
    ImagePanelComponent,
    CountrySpecificListComponent,
    CountrySpecificPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FwModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [UserService, 
    { provide: UserApi, useExisting: UserService },
    AuthGuard,
    AppDataService,
    AppCountryDataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
