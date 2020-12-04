import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewVariation } from './new-variation.component';

describe('AddNewVariation', () => {
  let component: AddNewVariation;
  let fixture: ComponentFixture<AddNewVariation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewVariation]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewVariation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
