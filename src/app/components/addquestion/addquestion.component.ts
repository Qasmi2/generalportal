import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Question } from '../../models/Question';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  @Output() questionAdded = new EventEmitter<Question>();

  text: string;
  answer: string;

  constructor() { }

  ngOnInit() {
  }

  addQuestion() {
    this.questionAdded.emit({ text: this.text, answer: this.answer, hide: true });
  }

}
