import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorsDetailsComponent } from './realtors-details.component';

describe('RealtorsDetailsComponent', () => {
  let component: RealtorsDetailsComponent;
  let fixture: ComponentFixture<RealtorsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtorsDetailsComponent ]
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
