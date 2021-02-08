import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ScreenService } from './services/screen.service';
import { MenuService } from './services/menu.service';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { RouterModule } from '@angular/router';
import { PopupMenuComponent } from '../fw/menus/popup-menu/popup-menu.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { DynamicFormComponent } from './dynamic-forms/dynamic-form/dynamic-form.component';
import { DynamicFieldComponent } from './dynamic-forms/dynamic-field/dynamic-field.component';
import { PanelComponent } from './panels/panel/panel.component';

@NgModule({
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent,
    SignInComponent,
    RegisterUserComponent,
    DynamicFormComponent,
    DynamicFieldComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FrameworkConfigService,
    ScreenService,
    MenuService
  ],
  exports: [
    FrameworkBodyComponent,
    DynamicFormComponent,
    PanelComponent
  ]
})
export class FwModule { }
