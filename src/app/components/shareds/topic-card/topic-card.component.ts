import { Component, Input, OnInit } from '@angular/core';
import { TopicModel } from '../../../models/topic.model';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrl: './topic-card.component.scss'
})
export class TopicCardComponent implements OnInit {
  @Input()
  totalQuestion = 0;
    
  @Input()
  topic: TopicModel = {};

  @Input()
  index: number = 0;

  @Input()
  routerLink: string = '';

  ngOnInit(): void {

  }
}
