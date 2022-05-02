import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.scss']
})
export class InteractiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  availableAnswers: number[] = [1, 2, 3, 4, 5]
  selectedAnswer: number = 0 //where 0 is equal to no answer


  interactiveVisible:boolean = true
  thanksVisible:boolean = false


  openClose(){
    this.interactiveVisible = false;
    this.thanksVisible = true;

  }

  selectAnswer(answer: number){
    this.selectedAnswer = answer; //per salvarli
  }



}
