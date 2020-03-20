import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealtorsComponent } from './realtors/realtors.component';

const routes: Routes = [
  { path: '', redirectTo: 'realtors', pathMatch: 'full' },
  { path: 'realtors', component: RealtorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
