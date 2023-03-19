import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddroleComponent } from './rolecomponents/addrole/addrole.component';
import { RoledashboardComponent } from './rolecomponents/roledashboard/roledashboard.component';
import { DashboardComponent } from './usercomponent/dashboard/dashboard.component';
import { LoginComponent } from './usercomponent/login/login.component';
import { RegisterComponent } from './usercomponent/register/register.component';

const routes: Routes = [
  {path:'' ,component:LoginComponent},
  {path:'login' ,component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:DashboardComponent},
  {path:'home/rolemanagement',component:RoledashboardComponent},
  {path:'home/createrole',component:AddroleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
