import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeDetailComponent } from './practice-detail.component';

describe('PracticeDetailComponent', () => {
  let component: PracticeDetailComponent;
  let fixture: ComponentFixture<PracticeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
