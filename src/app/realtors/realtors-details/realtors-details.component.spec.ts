import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorsDetailsComponent } from './realtors-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { RealtorService } from 'src/app/shared/services/realtors.service';

describe('RealtorsDetailsComponent', () => {
  let component: RealtorsDetailsComponent;
  let fixture: ComponentFixture<RealtorsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ RealtorsDetailsComponent ],
      providers: [
        RealtorService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
