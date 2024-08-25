import { Component, OnInit } from '@angular/core';
import { ExerciseModel } from '../../../models/exercise.model';
import { ExerciseService } from '../../../services/exercise.service';
import { Practice266Service } from '../../../services/practice266.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PracticeHistoryService } from '../../../services/practice-history.service';

@Component({
    selector: 'app-practices266-exam',
    templateUrl: './practices266-exam.component.html',
    styleUrl: './practices266-exam.component.scss'
})
export class Practices266ExamComponent implements OnInit {
    exercises: ExerciseModel[] = [];
    totalQuestion = 0;
    topicId: number= 0;

    isShowExercisesModal: boolean = false;

    constructor(
        private practice266Serice: Practice266Service,
        private activatedRoute: ActivatedRoute,
        private exerciceService: ExerciseService,
        private router: Router,
        private practiceHistoryService: PracticeHistoryService
    ) {
    }

    ngOnInit(): void {
        const id: any = this.activatedRoute.snapshot.paramMap.get('id');
        this.topicId = parseInt(id);
        const {startIndex, endIndex} = this.practice266Serice.getStartEndIndex(id, 266, 50);
        const exercises = this.practice266Serice.getPractices(startIndex, endIndex);
        this.exercises = exercises;
        this.totalQuestion = this.exercises.length;
    }

    onFinishPractice() {
        this.exerciceService.setExerciseObs(this.exercises);
        this.practiceHistoryService.savePractice266Question(this.exercises);
        this.router.navigate(['practices', this.topicId, 'finish']);
    }

    showExercisesModal(): void {
        this.isShowExercisesModal = true;
    }
}
