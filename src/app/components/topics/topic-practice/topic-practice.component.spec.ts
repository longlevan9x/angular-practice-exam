import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPracticeComponent } from './topic-practice.component';

describe('TopicPracticeComponent', () => {
  let component: TopicPracticeComponent;
  let fixture: ComponentFixture<TopicPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
