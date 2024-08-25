import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExerciseModel } from '../../../models/exercise.model';

@Component({
    selector: 'app-question-check-modal',
    templateUrl: './question-check-modal.component.html',
    styleUrl: './question-check-modal.component.scss'
})
export class QuestionCheckModalComponent {
    @Input()
    exercises: ExerciseModel[] = [];

    @Input()
    isShowModal: boolean = false;
    @Output()
    isShowModalChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    clickQuestion: EventEmitter<object> = new EventEmitter<object>();

    onExerModalOk(): void {
        this.isShowModal = false;
        this.isShowModalChange.emit(this.isShowModal);
    }

    onClickQuestion(id?: number, index?: number) {
        this.clickQuestion.emit({id, index});
    }
}
