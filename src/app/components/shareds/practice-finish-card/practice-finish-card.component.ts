import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseModel } from '../../../models/exercise.model';
import { ExerciseService } from '../../../services/exercise.service';

@Component({
    selector: 'app-practice-finish-card',
    templateUrl: './practice-finish-card.component.html',
    styleUrl: './practice-finish-card.component.scss'
})
export class PracticeFinishCardComponent implements OnInit {
    @Input()
    exercises: ExerciseModel[] = [];
    @Input()
    retestUrl: string = '';
    @Input()
    passedScrore = 85;
    
    totalCorrectAnswer = 0;
    totalWrongAnswer = 0;
    totalQuestion = 0;
    scrore = 0;
    isPassed = false;

   

    constructor(
        private exerciseService: ExerciseService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit(): void {
        this.totalQuestion = this.exercises.length;
        this.totalCorrectAnswer = this.exercises.filter(ex => ex.chooseAnwser === ex.anwser).length;
        this.totalWrongAnswer = this.totalQuestion - this.totalCorrectAnswer;
        this.scrore = (this.totalCorrectAnswer / this.totalQuestion) * 100 || 0;
        this.isPassed = this.scrore >= this.passedScrore;
    }
}
