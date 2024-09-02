import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ExerciseModel } from '../models/exercise.model';
import { PRACTICE_HISTORY } from '../constans/practice-history';

@Injectable({
    providedIn: 'root'
})
export class PracticeHistoryService {

    constructor(private localStorageService: LocalStorageService) {
    }

    savePractice266Question(exercises: ExerciseModel[]) {
        const prac266ques: any[] = this.localStorageService.getItemArray(PRACTICE_HISTORY.prac266ques);

        exercises.filter(e => e.chooseAnswer).forEach((item, index) => {
            const id: any = item.id;
            let chooseAnswerHistory = {
                chooseAnswer: item.chooseAnswer,
                date: new Date()
            };

            let chooseAnswer = prac266ques[id] || [];
            chooseAnswer.push(chooseAnswerHistory);

            prac266ques[id] = chooseAnswer;
        });

        this.localStorageService.setItem(PRACTICE_HISTORY.prac266ques, prac266ques);
    }

    getPrac266Histories(): ExerciseModel[] {
        return this.localStorageService.getItemArray(PRACTICE_HISTORY.prac266ques);
    }

    getQuestionWithId(exerId?: number): any[] {
        const _id: any = exerId;
        const histories: any = this.localStorageService.getItem(PRACTICE_HISTORY.prac266ques) || {};

        return histories[_id] || [];
    }

    savePrac266Bookmark(exercise: ExerciseModel, isBookmarked: boolean = false): void {
        let pracBookmarks: ExerciseModel[] = this.localStorageService.getItemArray(PRACTICE_HISTORY.prac266BM);

        if (isBookmarked) {
            pracBookmarks = pracBookmarks.filter(e => e.id !== exercise.id);
        } else {
            pracBookmarks.push({ id: exercise.id });
        }

        this.localStorageService.setItem(PRACTICE_HISTORY.prac266BM, pracBookmarks);
    }

    getPrac266Bookmarks(): ExerciseModel[] {
        return this.localStorageService.getItemArray(PRACTICE_HISTORY.prac266BM);
    }
}
