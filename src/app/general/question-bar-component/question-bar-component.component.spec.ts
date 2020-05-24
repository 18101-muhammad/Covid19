import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBarComponentComponent } from './question-bar-component.component';

describe('QuestionBarComponentComponent', () => {
  let component: QuestionBarComponentComponent;
  let fixture: ComponentFixture<QuestionBarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionBarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
