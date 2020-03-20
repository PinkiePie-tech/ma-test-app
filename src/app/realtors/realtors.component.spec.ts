import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorsComponent } from './realtors.component';

describe('RealtorsComponent', () => {
  let component: RealtorsComponent;
  let fixture: ComponentFixture<RealtorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtorsComponent ]
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
