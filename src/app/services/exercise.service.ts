import { Injectable } from '@angular/core';
import { ExerciseModel } from '../models/exercise.model';
import { exercises } from '../dumps/exercise.dump';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExerciseService {
    exercise$: BehaviorSubject<ExerciseModel[]> = new BehaviorSubject<ExerciseModel[]>([]);

    constructor() { }

    getExercises(topicId: number): ExerciseModel[] {
        const numberQuestionOfTopic = 20;
        const totalTopic = 18;

        let startIndex = (topicId - 1) * numberQuestionOfTopic;
        let endIndex = (topicId - 1) * numberQuestionOfTopic + numberQuestionOfTopic;

        if (topicId <= 0) {
            startIndex = numberQuestionOfTopic * totalTopic;
            endIndex = -1;
        }

        return exercises.slice(startIndex, endIndex);
    }

    getAllExercise() {
        return exercises;
    }

    setExerciseObs(exercises: ExerciseModel[]): void {
        this.exercise$.next(exercises);
    }

    getExerciseObs(): Observable<ExerciseModel[]> {
        return this.exercise$.asObservable();
    }
}
