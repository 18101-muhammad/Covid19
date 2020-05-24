import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralModule } from './general/general.module';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResultItemComponent } from './search-results/search-result-item/search-result-item.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnswerModalComponent } from './answer-modal/answer-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    SearchResultsComponent,
    SearchResultItemComponent,
    NewQuestionComponent,
    ProfileComponent,
    LoginSignUpComponent,
    QuestionDetailComponent,
    AnswerModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AnswerModalComponent]
})
export class AppModule { }
