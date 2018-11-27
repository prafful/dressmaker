import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TailordetailComponent } from './tailordetail.component';

describe('TailordetailComponent', () => {
  let component: TailordetailComponent;
  let fixture: ComponentFixture<TailordetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailordetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailordetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
