import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../../services/exercise.service';
import { ExerciseModel } from '../../../models/exercise.model';

@Component({
    selector: 'app-practice-detail',
    templateUrl: './practice-detail.component.html',
    styleUrl: './practice-detail.component.scss'
})
export class PracticeDetailComponent implements OnInit {
    exercises: ExerciseModel[] = [];
    totalQuestion = 0;

    constructor(private exerciseService: ExerciseService) {
    }

    ngOnInit(): void {
        const exercises = this.exerciseService.getAllExercise();
        const totalExer = exercises.length - 1;
        this.totalQuestion = 20;
        const ranNums = this.genRandomNums(this.totalQuestion, totalExer);
        this.exercises = exercises.filter((v, i) => ranNums.includes(i));
    }

    get randomNumber() {
        return Math.floor(Math.random() * 1000);
    }

    onFinishPractice() {
        
    }

    genRandomNum(maxNum: number) {
        let num = this.randomNumber;

        while (num > maxNum) {
            num = this.randomNumber;
        }

        return num;
    }

    genRandomNums(toPick: number, maxNum: number) {
        let ranNums = [];

        for (let i = 0; i < toPick; i++) {
            ranNums.push(this.genRandomNum(maxNum));
        }

        return ranNums;
    }
}
