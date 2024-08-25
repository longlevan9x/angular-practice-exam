import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseModel } from '../../../models/exercise.model';
import { ExerciseService } from '../../../services/exercise.service';
import { Practice266Service } from '../../../services/practice266.service';
import { ViewCustomizeModel } from '../../../models/view-customize.model';

@Component({
    selector: 'app-practice266-exam-random',
    templateUrl: './practice266-exam-random.component.html',
    styleUrl: './practice266-exam-random.component.scss'
})
export class Practice266ExamRandomComponent {
    exercises: ExerciseModel[] = [];
    totalQuestion = 0;
    topicId: number = 0;

    isShowExercisesModal: boolean = false;
    isOpenViewSettingModal: boolean = false;

    viewCustomize: ViewCustomizeModel = {
        questionPerPage: 50,
        isRandomQuestion: false,
        isShowAnswer: false,
        isShowFullExplain: false,
        isShowAllQuestion: false
    }

    constructor(
        private practice266Serice: Practice266Service,
        private activatedRoute: ActivatedRoute,
        private exerciceService: ExerciseService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        const id: any = this.activatedRoute.snapshot.paramMap.get('id');
        this.topicId = parseInt(id);
        this.initExercise();
    }

    initExercise(): void {
        if (this.viewCustomize.isShowAllQuestion) {
            this.exercises = this.practice266Serice.getAllPractice();
            this.totalQuestion = this.exercises.length;
            
            return;
        }

        this.totalQuestion = this.viewCustomize.questionPerPage;
        this.exercises= this.practice266Serice.getPractices(0, this.totalQuestion);
    }

    onFinishPractice() {
        this.exerciceService.setExerciseObs(this.exercises);
        this.router.navigate(['practices', this.topicId, 'finish']);
    }

    showExercisesModal(): void {
        this.isShowExercisesModal = true;
    }

    onShowViewSetingModal() {
        this.isOpenViewSettingModal = true;
    }

    onViewSettingOk() {
        this.initExercise();
    }
}
