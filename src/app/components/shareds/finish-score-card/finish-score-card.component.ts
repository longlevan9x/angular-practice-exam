import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-finish-score-card',
    templateUrl: './finish-score-card.component.html',
    styleUrl: './finish-score-card.component.scss'
})
export class FinishScoreCardComponent {
    @Input()
    isPassed: boolean = false;

    @Input()
    scrore: number = 0;

    @Input()
    totalCorrectAnswer: number = 0;

    @Input()
    totalQuestion: number = 0;

    @Input()
    retestUrl: string = '';

    constructor(private router: Router) { }

    onRetest() {
        if (this.retestUrl) {
            this.router.navigateByUrl(this.retestUrl);
        }
    }
}
