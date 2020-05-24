import { NgModule } from '@angular/core';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { AnswerComponentComponent } from './answer-component/answer-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { RelatedQuestionsBarComponentComponent } from './related-questions-bar-component/related-questions-bar-component.component';
import { TrendingHashtagsComponentComponent } from './trending-hashtags-component/trending-hashtags-component.component';
import { CommonModule } from '@angular/common';
import { QuestionBarComponentComponent } from './question-bar-component/question-bar-component.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponentComponent,
    AnswerComponentComponent,
    FooterComponentComponent,
    RelatedQuestionsBarComponentComponent,
    TrendingHashtagsComponentComponent,
    QuestionBarComponentComponent
  ],
  imports:[
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponentComponent,
    AnswerComponentComponent,
    FooterComponentComponent,
    RelatedQuestionsBarComponentComponent,
    TrendingHashtagsComponentComponent,
    QuestionBarComponentComponent
  ]
})
export class GeneralModule { }
