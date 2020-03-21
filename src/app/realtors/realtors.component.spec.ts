import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorsComponent } from './realtors.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { RealtorService } from '../shared/services/realtors.service';
import { DeviceDetectorService } from 'ngx-device-detector';

describe('RealtorsComponent', () => {
  let component: RealtorsComponent;
  let fixture: ComponentFixture<RealtorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ RealtorsComponent ],
      providers: [
        RealtorService,
        DeviceDetectorService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
