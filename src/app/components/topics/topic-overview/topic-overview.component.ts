import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { TopicModel } from '../../../models/topic.model';
import { TopicService } from '../../../services/topic.service';

@Component({
    selector: 'app-topic-overview',
    templateUrl: './topic-overview.component.html',
    styleUrl: './topic-overview.component.scss'
})
export class TopicOverviewComponent implements OnInit {
    topic: TopicModel = {};

    constructor(private activatedRoute: ActivatedRoute, private topicService: TopicService) {
    }

    ngOnInit(): void {
        const topicId: string|any = this.activatedRoute.snapshot.paramMap.get('id');
        this.topic = this.topicService.getTopic(parseInt(topicId));
    }
}
