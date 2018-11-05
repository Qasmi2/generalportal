import { Component, OnInit, Input } from '@angular/core';
import { DateService } from '../../services/date.service';

import { Question } from "../../models/Question";

@Component({
  selector: 'app-questionask',
  templateUrl: './questionask.component.html',
  styleUrls: ['./questionask.component.css']
})
export class QuestionaskComponent implements OnInit {
  @Input('question') question: Question;
  constructor(public dataService: DateService) { }

  ngOnInit() {
  }

  removeQuestion(question) {
    this.dataService.removeQuestion(question);
  }
}
