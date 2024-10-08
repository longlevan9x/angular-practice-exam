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
        return ['topics', this.topicId, 'practice'].join('/');
    }
}
