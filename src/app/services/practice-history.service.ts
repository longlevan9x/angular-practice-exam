import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ExerciseModel } from '../models/exercise.model';
import { PRACTICE_HISTORY } from '../constans/practice-history';

@Injectable({
    providedIn: 'root'
})
export class PracticeHistoryService {

    constructor(private localStorageService: LocalStorageService) { }

    savePractice266(exercises: ExerciseModel[]): void {
        this.localStorageService.setItem("prac266ques", exercises);
    }

    savePractice266Question(exercises: ExerciseModel[]) {
        const prac266ques: any = this.localStorageService.getItem(PRACTICE_HISTORY.prac266ques);
        exercises.filter(e => e.chooseAnwser).forEach((item, index) => {
            const id: any = item.id;
            let chooseAnwserHistory = {
                chooseAnwser: item.chooseAnwser,
                date: new Date()
            };

            let choosedAnwser = prac266ques[id] || [];
            choosedAnwser.push(chooseAnwserHistory);

            prac266ques[id] = choosedAnwser;
        });

        this.localStorageService.setItem(PRACTICE_HISTORY.prac266ques, prac266ques);
    }

    getQuestionWithId(exerId?: number): any[] {
        const _id: any = exerId;
        const histories: any = this.localStorageService.getItem(PRACTICE_HISTORY.prac266ques) || {};
        console.log(_id, histories[_id]);
        return histories[_id] || [];
    }
}
