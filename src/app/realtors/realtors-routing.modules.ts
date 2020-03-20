import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealtorsComponent } from './realtors.component';

const realtorsRoutes: Routes = [
  {
    path: 'realtors',
    component: RealtorsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(realtorsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RealtorsRoutingModule { }
