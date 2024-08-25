import { Component, HostListener, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseModel } from '../../../models/exercise.model';
import { ExerciseService } from '../../../services/exercise.service';
import { Practice266Service } from '../../../services/practice266.service';
import { ViewCustomizeModel } from '../../../models/view-customize.model';
import { UtilsService } from '../../../services/utils.service';
import { PracticeHistoryService } from '../../../services/practice-history.service';

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

    isShowExerBtn: boolean = false;

    viewCustomize: ViewCustomizeModel = {
        questionPerPage: 50,
        isRandomQuestion: true,
        isShowAnswer: false,
        isShowFullExplain: false,
        isShowAllQuestion: false
    }

    constructor(
        private practice266Serice: Practice266Service,
        private activatedRoute: ActivatedRoute,
        private exerciceService: ExerciseService,
        private router: Router,
        private utilsService: UtilsService,
        private practiceHistoryService: PracticeHistoryService
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

        if (this.viewCustomize.isRandomQuestion) {
            const exercises = this.practice266Serice.getAllPractice();
            const ranNums = this.utilsService.genRandomNums(this.totalQuestion, exercises.length);
            console.log(ranNums.sort());
            this.exercises = exercises.filter((v, i) => ranNums.includes(i));
            return;
        }

        this.exercises = this.practice266Serice.getPractices(0, this.totalQuestion);
    }

    onFinishPractice(): void {
        this.exerciceService.setExerciseObs(this.exercises);
        this.practiceHistoryService.savePractice266Question(this.exercises);
        this.router.navigate(['practices', 'exam-finish']);
    }

    showExercisesModal(): void {
        this.isShowExercisesModal = true;
    }

    onShowViewSetingModal(): void {
        this.isOpenViewSettingModal = true;
    }

    onViewSettingOk(): void {
        this.initExercise();
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.isShowExerBtn = scrollPosition > 60;
    }
}
