import { Injectable } from '@angular/core';
import { Question } from '../models/Question'
@Injectable({
  providedIn: 'root'
})
export class DateService {
  questions: Question[];
  constructor() {
    // this.questions = [
    //   {
    //     text: 'what is your Name:',
    //     answer: 'My Name is Nadeem Qasmi',
    //     hide: true
    //   },
    //   {
    //     text: 'what is your age:',
    //     answer: '26 years 3 months 3 days',
    //     hide: true
    //   },
    //   {
    //     text: 'My favorit color',
    //     answer: 'Light Blue',
    //     hide: true
    //   },
    //   {
    //     text: 'What is your Goal',
    //     answer: 'Make me myself',
    //     hide: true
    //   },
    // ];
  }
  // Get Questions from LS
  getQuestions() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }
  // Add Question to LS
  addQuestion(question: Question) {
    this.questions.unshift(question);

    // Init local var
    let questions;

    if (localStorage.getItem('questions') === null) {
      questions = [];
      // Push new question
      questions.unshift(question);
      // Set new array to LS
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // Add new question
      questions.unshift(question);
      // Re set LS
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }
  // Remove Question from LS
  removeQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question == this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}
