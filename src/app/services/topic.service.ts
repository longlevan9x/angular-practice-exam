import { Injectable } from '@angular/core';
import { topics } from '../dumps/topic.dump';
import { TopicModel } from '../models/topic.model';

@Injectable({
    providedIn: 'root'
})
export class TopicService {
    
    constructor() { }

    getTopics(examId: number): TopicModel[] {
        return topics.filter(topic => topic.examId === examId);
    }

    getTopic(id: number): TopicModel|any {
        return topics.find(t => t.id === id);
    }
}
