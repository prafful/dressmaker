import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtailorComponent } from './addtailor.component';

describe('AddtailorComponent', () => {
  let component: AddtailorComponent;
  let fixture: ComponentFixture<AddtailorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtailorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtailorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
