import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicOverviewComponent } from './topic-overview.component';

describe('TopicOverviewComponent', () => {
  let component: TopicOverviewComponent;
  let fixture: ComponentFixture<TopicOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
