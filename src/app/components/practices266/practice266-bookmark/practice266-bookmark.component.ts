import {Component, OnInit} from '@angular/core';
import {PracticeHistoryService} from "../../../services/practice-history.service";
import {ExerciseModel} from "../../../models/exercise.model";
import {Practice266Service} from "../../../services/practice266.service";

@Component({
    selector: 'app-practice266-bookmark',
    templateUrl: './practice266-bookmark.component.html',
    styleUrl: './practice266-bookmark.component.scss'
})
export class Practice266BookmarkComponent implements OnInit {
    exercises : ExerciseModel[] = [];

    totalQuestion = 0;

    constructor(private practiceHistoryService: PracticeHistoryService, private practice266Service: Practice266Service) {
    }

    ngOnInit(): void {
        const exerBookmarks: ExerciseModel[] = this.practiceHistoryService.getPrac266Bookmarks();
        const exerIds: number[] = exerBookmarks.map(e => e.id) as number[];
        this.exercises = this.practice266Service.getPracticesByIds(exerIds);
        this.totalQuestion = this.exercises.length;
    }
}
