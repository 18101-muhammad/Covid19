import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedQuestionsBarComponentComponent } from './related-questions-bar-component.component';

describe('RelatedQuestionsBarComponentComponent', () => {
  let component: RelatedQuestionsBarComponentComponent;
  let fixture: ComponentFixture<RelatedQuestionsBarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedQuestionsBarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedQuestionsBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
