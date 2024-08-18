import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practices266ExamComponent } from './practices266-exam.component';

describe('Practices266ExamComponent', () => {
  let component: Practices266ExamComponent;
  let fixture: ComponentFixture<Practices266ExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practices266ExamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practices266ExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
