import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorsHeaderComponent } from './realtors-header.component';

describe('RealtorsHeaderComponent', () => {
  let component: RealtorsHeaderComponent;
  let fixture: ComponentFixture<RealtorsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtorsHeaderComponent ]
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
