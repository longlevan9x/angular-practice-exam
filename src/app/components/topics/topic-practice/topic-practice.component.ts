import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { ExerciseModel } from '../../../models/exercise.model';
import { TopicModel } from '../../../models/topic.model';
import { ExerciseService } from '../../../services/exercise.service';
import { TopicService } from '../../../services/topic.service';

@Component({
    selector: 'app-topic-practice',
    templateUrl: './topic-practice.component.html',
    styleUrl: './topic-practice.component.scss'
})
export class TopicPracticeComponent {
    countdownTime = 15 * 60;
    progressPercentage: number = 0;
    elapsedSeconds = 0;
    private timerSubscription: Subscription = new Subscription();
    timeRemaining: { minutes: number, seconds: number } = { minutes: 0, seconds: 0 };
    currentQuestionIndex = 0;

    topic: TopicModel = {};
    exercises: ExerciseModel[] = [];
    exercise: ExerciseModel = {};

    isShowExercisesModal: boolean = false;
    constructor(
        private activatedRoute: ActivatedRoute,
        private topicService: TopicService,
        private exerciceService: ExerciseService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.startCountdown();
        const topicId: string | any = this.activatedRoute.snapshot.paramMap.get('id');
        this.topic = this.topicService.getTopic(parseInt(topicId));
        this.exercises = this.exerciceService.getExercises(topicId);
        this.exercise = this.exercises[this.currentQuestionIndex];
    }

    ngOnDestroy(): void {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
    }

    isShowPrevBtn(): boolean {
        if (this.currentQuestionIndex == 0) {
            return false;
        }

        return true;
    }

    isShowNextBtn(): boolean {
        if (this.currentQuestionIndex == this.exercises.length - 1) {
            return false;
        }

        return true;
    }

    onPreviousQuestion(): void {
        if (this.currentQuestionIndex == 0) {
            return;
        }

        this.exercises[this.currentQuestionIndex].chooseAnwser = this.exercise.chooseAnwser;
        this.currentQuestionIndex -= 1;
        this.exercise = this.exercises[this.currentQuestionIndex];
    }

    onNextQuestion(): void {
        if (this.currentQuestionIndex == this.exercises.length - 1) {
            return;
        }

        this.exercises[this.currentQuestionIndex].chooseAnwser = this.exercise.chooseAnwser;
        this.currentQuestionIndex += 1;
        this.exercise = this.exercises[this.currentQuestionIndex];
    }

    private startCountdown(): void {
        this.timerSubscription = interval(1000).subscribe(() => {
            if (this.elapsedSeconds < this.countdownTime) {
                this.elapsedSeconds++;
                this.timeRemaining = {
                    minutes: Math.floor((this.countdownTime - this.elapsedSeconds) / 60),
                    seconds: (this.countdownTime - this.elapsedSeconds) % 60
                };
                this.progressPercentage = (this.elapsedSeconds / this.countdownTime) * 100;
            } else {
                if (this.timerSubscription) {
                    this.timerSubscription.unsubscribe();
                }
            }
        });
    }

    showExercisesModal(): void {
        this.isShowExercisesModal = true;
    }

    onExerModalOk(): void {
        this.isShowExercisesModal = false;
    }

    onFinishPractice() {
        this.exerciceService.setExerciseObs(this.exercises);
        this.router.navigate(['topics', this.topic.id, 'finish']);
    }
}
