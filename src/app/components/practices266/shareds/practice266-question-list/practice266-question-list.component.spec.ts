import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice266QuestionListComponent } from './practice266-question-list.component';

describe('Practice266QuestionListComponent', () => {
  let component: Practice266QuestionListComponent;
  let fixture: ComponentFixture<Practice266QuestionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice266QuestionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice266QuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
