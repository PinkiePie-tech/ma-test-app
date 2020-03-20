import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealtorsDetailsComponent } from './realtors-details/realtors-details.component';
import { RealtorsListComponent } from './realtors-list/realtors-list.component';
import { RealtorsComponent } from './realtors.component';
import { RealtorsHeaderComponent } from './app-header/realtors-header.component';
import { SharedModule } from '../shared/shared.module';
import { RealtorService } from '../shared/services/realtors.service';

@NgModule({
  declarations: [
    RealtorsHeaderComponent,
    RealtorsListComponent,
    RealtorsDetailsComponent,
    RealtorsComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    RealtorsComponent
  ],
  providers: [
    RealtorService
  ]
})
export class RealtorsModule { }
