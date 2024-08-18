import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeFinishCardComponent } from './practice-finish-card.component';

describe('PracticeFinishCardComponent', () => {
  let component: PracticeFinishCardComponent;
  let fixture: ComponentFixture<PracticeFinishCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeFinishCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeFinishCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
