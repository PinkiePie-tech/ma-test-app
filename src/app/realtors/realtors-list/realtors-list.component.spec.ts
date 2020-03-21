import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorsListComponent } from './realtors-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RealtorService } from 'src/app/shared/services/realtors.service';
import { SharedModule } from 'src/app/shared/shared.module';

describe('RealtorsListComponent', () => {
  let component: RealtorsListComponent;
  let fixture: ComponentFixture<RealtorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        SharedModule
      ],
      declarations: [ RealtorsListComponent ],
      providers: [
        RealtorService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
