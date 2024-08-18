import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExerciseService } from '../../../services/exercise.service';
import { ExerciseModel } from '../../../models/exercise.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topic-finish',
  templateUrl: './topic-finish.component.html',
  styleUrl: './topic-finish.component.scss'
})
export class TopicFinishComponent implements OnInit, OnDestroy {
  exerSub$: Subscription = new Subscription();
  exercises: ExerciseModel[] = [];
  totalCorrectAnswer = 0;
  totalWrongAnswer = 0;
  totalQuestion = 0;
  scrore = 0;
  topicId: any = '';
  isPassed = false;
  passedScrore = 85;

  constructor(
    private exerciseService: ExerciseService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.topicId = this.activatedRoute.snapshot.paramMap.get('id');

    this.exerSub$ = this.exerciseService.getExerciseObs().subscribe((exercises) => {
      this.exercises = exercises;
      this.totalQuestion = this.exercises.length;
      this.totalCorrectAnswer = this.exercises.filter(ex => ex.chooseAnwser === ex.anwser).length;
      this.totalWrongAnswer = this.totalQuestion - this.totalCorrectAnswer;
      this.scrore = (this.totalCorrectAnswer / this.totalQuestion) * 100 || 0;
      this.isPassed = this.scrore >= this.passedScrore;
      
    });
  }

  ngOnDestroy(): void {
    this.exerSub$.unsubscribe();
  }

  onRetest() {
    this.router.navigate(['topics', this.topicId, 'practice']);
  }
}
