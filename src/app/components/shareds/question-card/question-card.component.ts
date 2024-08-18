import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExerciseModel } from '../../../models/exercise.model';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrl: './question-card.component.scss'
})
export class QuestionCardComponent implements OnInit{
  @Input() isAllowEditAnswer = true;
  @Input() isShowAnswer = false;
  @Input() isShowExplain = false;
  @Input() currentQuestionIndex = 1;
  @Input() totalQuestion = 0;
  @Input() exercise: ExerciseModel = {};
  @Input() isResult = false;
  
  @Output() exerciseChange = new EventEmitter<ExerciseModel>();

  
  ngOnInit(): void {
  }

  onModelChange($event: any) {
    this.exerciseChange.emit(this.exercise);
  }
}
