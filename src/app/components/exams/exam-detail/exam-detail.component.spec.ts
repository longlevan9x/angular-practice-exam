import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamDetailComponent } from './exam-detail.component';

describe('ExamDetailComponent', () => {
  let component: ExamDetailComponent;
  let fixture: ComponentFixture<ExamDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
