import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './usercomponent/login/login.component';
import { RegisterComponent } from './usercomponent/register/register.component';
import { HeaderComponent } from './usercomponent/header/header.component';
import { FooterComponent } from './usercomponent/footer/footer.component';
import { SidenavComponent } from './usercomponent/sidenav/sidenav.component';
import { DashboardComponent } from './usercomponent/dashboard/dashboard.component';
import { RoledashboardComponent } from './rolecomponents/roledashboard/roledashboard.component';
import { AddroleComponent } from './rolecomponents/addrole/addrole.component';
import { UpdateroleComponent } from './rolecomponents/updaterole/updaterole.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { GeneralComponent } from './rolecomponents/userinput/general/general.component';
import { PermissionsComponent } from './rolecomponents/userinput/permissions/permissions.component';
import { AdditionalComponent } from './rolecomponents/userinput/additional/additional.component';
import { AccesscontrolComponent } from './rolecomponents/userinput/accesscontrol/accesscontrol.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    DashboardComponent,
    RoledashboardComponent,
    AddroleComponent,
    UpdateroleComponent,
    GeneralComponent,
    PermissionsComponent,
    AdditionalComponent,
    AccesscontrolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule ,
    MatFormFieldModule,
    MatIconModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatInputModule,
    MatSelectModule

  ],
  exports:[
    MatInputModule,
    MatSelectModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
