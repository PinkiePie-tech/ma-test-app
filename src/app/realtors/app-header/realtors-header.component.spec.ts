import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorsHeaderComponent } from './realtors-header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { RealtorService } from 'src/app/shared/services/realtors.service';
import { SharedModule } from 'src/app/shared/shared.module';

describe('RealtorsHeaderComponent', () => {
  let component: RealtorsHeaderComponent;
  let fixture: ComponentFixture<RealtorsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        SharedModule
      ],
      declarations: [ RealtorsHeaderComponent ],
      providers: [
        RealtorService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtorsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
