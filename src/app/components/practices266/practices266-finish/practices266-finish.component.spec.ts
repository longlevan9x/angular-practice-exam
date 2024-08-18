import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practices266FinishComponent } from './practices266-finish.component';

describe('Practices266FinishComponent', () => {
  let component: Practices266FinishComponent;
  let fixture: ComponentFixture<Practices266FinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practices266FinishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practices266FinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
