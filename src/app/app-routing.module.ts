import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './page/sign-up/sign-up.component';

const routes: Routes = [

  { path: '', redirectTo: 'SignUp', pathMatch: 'full' },
  { path: 'SignUp', component: SignUpComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
