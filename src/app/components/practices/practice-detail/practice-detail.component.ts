import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../../services/exercise.service';
import { ExerciseModel } from '../../../models/exercise.model';
import { UtilsService } from '../../../services/utils.service';

@Component({
    selector: 'app-practice-detail',
    templateUrl: './practice-detail.component.html',
    styleUrl: './practice-detail.component.scss'
})
export class PracticeDetailComponent implements OnInit {
    exercises: ExerciseModel[] = [];
    totalQuestion = 0;

    constructor(private exerciseService: ExerciseService, private utilsService: UtilsService) {
    }

    ngOnInit(): void {
        const exercises = this.exerciseService.getAllExercise();
        const totalExer = exercises.length - 1;
        this.totalQuestion = 20;
        const ranNums = this.utilsService.genRandomNums(this.totalQuestion, totalExer);
        this.exercises = exercises.filter((v, i) => ranNums.includes(i));
    }

    onFinishPractice() {
        
    }
}
