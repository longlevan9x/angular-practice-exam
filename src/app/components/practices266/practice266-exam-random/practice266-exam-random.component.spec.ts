import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice266ExamRandomComponent } from './practice266-exam-random.component';

describe('Practice266ExamRandomComponent', () => {
  let component: Practice266ExamRandomComponent;
  let fixture: ComponentFixture<Practice266ExamRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice266ExamRandomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice266ExamRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
