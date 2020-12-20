import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllScenario } from './all-scenario.component';

describe('AllScenario', () => {
  let component: AllScenario;
  let fixture: ComponentFixture<AllScenario>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllScenario]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllScenario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
