import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExerciseModel } from '../../../models/exercise.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseService } from '../../../services/exercise.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-practices266-finish',
    templateUrl: './practices266-finish.component.html',
    styleUrl: './practices266-finish.component.scss'
})
export class Practices266FinishComponent implements OnInit, OnDestroy {
    exerSub$: Subscription = new Subscription();
    exercises: ExerciseModel[] = [];
    topicId: any = '';

    constructor(
        private exerciseService: ExerciseService,
        private activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.topicId = this.activatedRoute.snapshot.paramMap.get('id');

        this.exerSub$ = this.exerciseService.getExerciseObs().subscribe((exercises) => {
            this.exercises = exercises;
        });
    }

    ngOnDestroy(): void {
        this.exerSub$.unsubscribe();
    }

    getRetestUrl(): string {
        return ['practices', this.topicId, 'exam'].join('/');
    }
}
