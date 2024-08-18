import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from '../../../services/topic.service';
import { TopicModel } from '../../../models/topic.model';

@Component({
    selector: 'app-topic-list',
    templateUrl: './topic-list.component.html',
    styleUrl: './topic-list.component.scss'
})
export class TopicListComponent implements OnInit {
    topics: TopicModel[] = [];

    constructor(private activatedRoute: ActivatedRoute, private topicService: TopicService) {
    }

    ngOnInit(): void {
        const examId: string|any = this.activatedRoute.snapshot.paramMap.get('id');
        this.topics = this.topicService.getTopics(parseInt(examId));
    }
}
