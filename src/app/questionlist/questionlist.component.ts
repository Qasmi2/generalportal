import { Component, OnInit } from '@angular/core';
import { DateService } from '../services/date.service';

import { Question } from '../models/Question';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {
  questions: Question[];
  constructor(public dateservice: DateService) {

  }

  ngOnInit() {
    this.questions = this.dateservice.getQuestions();
  }
  addQuestion(question: Question) {
    this.dateservice.addQuestion(question);
  }

}
