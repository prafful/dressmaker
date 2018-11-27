import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltailorComponent } from './alltailor.component';

describe('AlltailorComponent', () => {
  let component: AlltailorComponent;
  let fixture: ComponentFixture<AlltailorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltailorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltailorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
