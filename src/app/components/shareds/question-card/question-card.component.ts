import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExerciseModel} from '../../../models/exercise.model';
import {PracticeHistoryService} from '../../../services/practice-history.service';

@Component({
    selector: 'app-question-card',
    templateUrl: './question-card.component.html',
    styleUrl: './question-card.component.scss'
})
export class QuestionCardComponent implements OnInit {
    @Input() isAllowEditAnswer = true;
    @Input() isShowAnswer = false;
    @Input() isShowExplain = false;
    @Input() currentQuestionIndex = 1;
    @Input() totalQuestion = 0;
    @Input() exercise: ExerciseModel = {};
    @Input() isResult = false;
    @Input() isShowHistory = false;
    @Input() bookmarkKey: string = '';

    @Output() exerciseChange = new EventEmitter<ExerciseModel>();


    isBookmarked: boolean = false;

    constructor(private practiceHistoryService: PracticeHistoryService) {

    }

    ngOnInit(): void {
        this.isBookmarked = this.checkIsBookmarked();
    }

    onModelChange($event: any): void {
        this.exerciseChange.emit(this.exercise);
    }

    onShowHistoryChange($event?: any): void {
        if ($event && !this.exercise.histories?.length) {
            this.exercise.histories = this.practiceHistoryService.getQuestionWithId(this.exercise.id);
        }
    }

    onCheckAnswer(): void {
        this.isShowAnswer = !this.isShowAnswer;
    }

    onBookmark(): void {
        this.practiceHistoryService.savePrac266Bookmark(this.exercise, this.isBookmarked);
        this.isBookmarked = !this.isBookmarked;
    }

    checkIsBookmarked(): boolean {
        return !!this.practiceHistoryService.getPrac266Bookmarks().find(e => e.id === this.exercise.id);
    }
}
