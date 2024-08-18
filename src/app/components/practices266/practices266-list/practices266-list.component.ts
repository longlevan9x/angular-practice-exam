import { Component, OnInit } from '@angular/core';
import { TopicModel } from '../../../models/topic.model';

@Component({
    selector: 'app-practices266-list',
    templateUrl: './practices266-list.component.html',
    styleUrl: './practices266-list.component.scss'
})
export class Practices266ListComponent implements OnInit {
    totalQuesOnTopic = 50;
    totalQuestion = 300;

    topics: TopicModel[] = [];
    ngOnInit(): void {
        const totalTopic = this.totalQuestion / this.totalQuesOnTopic;
        for (let index = 0; index < totalTopic; index++) {
            this.topics.push({id: index + 1, name: `Chapter ${index + 1}`, contents: [], words: [], targets: []});
        }
    }
}
