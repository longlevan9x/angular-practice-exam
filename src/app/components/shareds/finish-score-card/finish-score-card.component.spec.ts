import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishScoreCardComponent } from './finish-score-card.component';

describe('FinishScoreCardComponent', () => {
  let component: FinishScoreCardComponent;
  let fixture: ComponentFixture<FinishScoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishScoreCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
