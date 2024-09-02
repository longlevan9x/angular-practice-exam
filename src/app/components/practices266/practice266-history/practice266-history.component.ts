import { Component, OnInit } from '@angular/core';
import { PracticeHistoryService } from '../../../services/practice-history.service';
import { ExerciseModel } from '../../../models/exercise.model';
import { Practice266Service } from '../../../services/practice266.service';

@Component({
    selector: 'app-practice266-history',
    templateUrl: './practice266-history.component.html',
    styleUrl: './practice266-history.component.scss'
})
export class Practice266HistoryComponent implements OnInit {
    exercises: ExerciseModel[] = [];

    totalQuestion = 0;

    constructor(private practiceHistoryService: PracticeHistoryService, private practice266Service: Practice266Service) {
    }

    ngOnInit(): void {
        const exerHistories: ExerciseModel[] = this.practiceHistoryService.getPrac266Histories();
        const _exerHisArr: any[] = exerHistories.map((e, i) => {
            if (e) {
                return { id: i, histories: e };
            }

            return null;
        }).filter(e => e);

        const exerIds: number[] = _exerHisArr.map(e => e?.id) as number[];
        this.exercises = this.practice266Service.getPracticesByIds(exerIds);
        this.totalQuestion = this.exercises.length;

        this.exercises = this.exercises.map((exer, i) => {
            const _hisArr: { chooseAnswer: string }[] = _exerHisArr.find(e => e?.id === exer.id)?.histories;

            exer.countHistories = [
                {
                    count: 0,
                    answer: "A"
                },
                {
                    count: 0,
                    answer: "B"
                },
                {
                    count: 0,
                    answer: "C"
                },
                {
                    count: 0,
                    answer: "D"
                }
            ];

            const hisObj: any = _hisArr.reduce((newObj: any, curObj, i) => {

                if (newObj[curObj.chooseAnswer]) {
                    newObj[curObj.chooseAnswer] += 1;
                }
                else {
                    newObj[curObj.chooseAnswer] = 1;
                }

                return newObj;
            }, {});

            exer.countHistories = exer.countHistories.map((countHis, i) => {
                if (hisObj[countHis.answer]) {
                    countHis.count = hisObj[countHis.answer];
                }

                return countHis;
            });

            return exer;
        });
    }
}
