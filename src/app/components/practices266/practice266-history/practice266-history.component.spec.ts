import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice266HistoryComponent } from './practice266-history.component';

describe('Practice266HistoryComponent', () => {
  let component: Practice266HistoryComponent;
  let fixture: ComponentFixture<Practice266HistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice266HistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice266HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
