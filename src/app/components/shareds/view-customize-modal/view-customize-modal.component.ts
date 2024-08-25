import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-view-customize-modal',
    templateUrl: './view-customize-modal.component.html',
    styleUrl: './view-customize-modal.component.scss'
})
export class ViewCustomizeModalComponent implements OnInit{
    @Input()
    isShowAllQuestion: boolean = false;
    @Input()
    isShowAnswer: boolean = true;
    @Input()
    isShowFullExplain: boolean = true;
    @Input()
    questionPerPage: number = 50;
    @Input()
    isRandomQuestion: boolean = false;
    @Input()
    nzVisible: boolean = false;

    @Output()
    nzVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output()
    isShowAllQuestionChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output()
    isShowAnswerChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output()
    isShowFullExplainChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output()
    questionPerPageChange: EventEmitter<number> = new EventEmitter<number>();
    @Output()
    isRandomQuestionChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    nzOnOk: EventEmitter<any> = new EventEmitter();

    ngOnInit(): void {
    }

    nzOnCancel() {
        this.nzVisible = false;
        this.nzVisibleChange.emit(this.nzVisible);
    }

    onOk($event: any) {
        this.nzVisible = false;
        this.nzVisibleChange.emit(this.nzVisible);
        this.questionPerPageChange.emit(this.questionPerPage);
        this.isRandomQuestionChange.emit(this.isRandomQuestion);
        this.isShowAllQuestionChange.emit(this.isShowAllQuestion);
        this.isShowFullExplainChange.emit(this.isShowFullExplain);
        this.isShowAnswerChange.emit(this.isShowAnswer);
        this.nzOnOk.emit($event);
    }
}
