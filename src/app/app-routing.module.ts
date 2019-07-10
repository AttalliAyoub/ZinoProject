import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { NativeComponent } from './native/native.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Auth', component: AuthComponent },
  { path: 'Native', component: NativeComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
