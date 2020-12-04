import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNewComponent } from './update-component.component';

describe('UpdateNewComponent', () => {
  let component: UpdateNewComponent;
  let fixture: ComponentFixture<UpdateNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateNewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
