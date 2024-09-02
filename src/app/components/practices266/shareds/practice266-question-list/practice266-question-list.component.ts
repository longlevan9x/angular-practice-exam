import { Component, HostListener, Input, QueryList, ViewChildren } from '@angular/core';
import { ExerciseModel } from '../../../../models/exercise.model';

@Component({
    selector: 'app-practice266-question-list',
    templateUrl: './practice266-question-list.component.html',
    styleUrl: './practice266-question-list.component.scss'
})
export class Practice266QuestionListComponent {
    @Input() exercises: ExerciseModel[] = [];
    @Input() totalQuestion: number = 0;
    @Input() isShowExplain: boolean = false;
    @Input() isShowHistory: boolean = false;

    isShowExercisesModal: boolean = false;
    isShowExerBtn: boolean = false;

    @ViewChildren('questionCardRef') questionCardElements!: QueryList<any>;

    constructor() {
    }

    ngOnInit(): void { }

    showExercisesModal(): void {
        this.isShowExercisesModal = true;
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.isShowExerBtn = scrollPosition > 60;
    }

    onClickQuestion(question?: { id: number, index: number } | any) {
        this.isShowExercisesModal = false;
        setTimeout(() => {
            const sectionArray = this.questionCardElements.toArray();
            const element = sectionArray[question.index].nativeElement;
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    }

    onBookmarkChange(isBookmarked: boolean, exerId?: number) {
        if (!isBookmarked) {
            this.exercises = this.exercises.filter(e => e.id !== exerId);
            this.totalQuestion -= 1;
        }
    }
}
