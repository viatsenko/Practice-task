import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {NetworksBikesComponent} from "./content/networks-bikes/networks-bikes.component";
import {ErrorPageComponent} from "./auth/error-page/error-page.component";
import {AuthGuard} from "./auth/auth.guard";
import {StationsBikesComponent} from "./content/stations-bikes/stations-bikes.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'bikes', component: NetworksBikesComponent, canActivate: [AuthGuard]},
  {path: 'bikes/:id', component: StationsBikesComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
