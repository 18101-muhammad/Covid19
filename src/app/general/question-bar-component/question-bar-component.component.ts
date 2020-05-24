import { Component, OnInit, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AnswerModalComponent } from 'src/app/answer-modal/answer-modal.component';
@Component({
  selector: 'app-question-bar-component',
  templateUrl: './question-bar-component.component.html',
  styleUrls: ['./question-bar-component.component.css']
})
export class QuestionBarComponentComponent implements OnInit, AfterViewInit {
  @ViewChild('answerAr') answerAr
  display="none";

  constructor(
    private renderer2: Renderer2,
    public matDialog: MatDialog
  ) { }
  ngAfterViewInit(): void {
    // var height= 10;
    // this.renderer2.setStyle(
    //   this.answerAr.nativeElement,
    //   'height',
    //   `${height}px`
    // )
  }

  ngOnInit(): void {
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(AnswerModalComponent, dialogConfig);
  }

  showAnswer(){
    console.log("ran")
    var height= 10;
    if(this.display=="none"){
      this.display="unset"
    }
    else{
      this.display="none"
    }
    this.renderer2.setStyle(
      this.answerAr.nativeElement,
      'display',
      `${this.display}`
    )
  }

}
