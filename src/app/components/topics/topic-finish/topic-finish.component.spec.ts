import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicFinishComponent } from './topic-finish.component';

describe('TopicFinishComponent', () => {
  let component: TopicFinishComponent;
  let fixture: ComponentFixture<TopicFinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicFinishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
