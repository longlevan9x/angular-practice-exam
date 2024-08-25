import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCheckModalComponent } from './question-check-modal.component';

describe('QuestionCheckModalComponent', () => {
  let component: QuestionCheckModalComponent;
  let fixture: ComponentFixture<QuestionCheckModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionCheckModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionCheckModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
