import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealtorsDetailsComponent } from './realtors-details/realtors-details.component';
import { RealtorsListComponent } from './realtors-list/realtors-list.component';
import { RealtorsComponent } from './realtors.component';
import { RealtorsHeaderComponent } from './app-header/realtors-header.component';
import { SharedModule } from '../shared/shared.module';
import { RealtorService } from '../shared/services/realtors.service';
import { DatePipe } from '../shared/pipe/DatePipe';
import { PhonePipe } from '../shared/pipe/PhonePipe';
import { DeviceDetectorModule, DeviceDetectorService } from 'ngx-device-detector';

@NgModule({
  declarations: [
    RealtorsHeaderComponent,
    RealtorsListComponent,
    RealtorsDetailsComponent,
    RealtorsComponent,
    DatePipe,
    PhonePipe
  ],
  imports: [
    SharedModule,
    CommonModule,
    DeviceDetectorModule
  ],
  exports: [
    RealtorsComponent
  ],
  providers: [
    RealtorService,
    DeviceDetectorService
  ]
})
export class RealtorsModule { }
