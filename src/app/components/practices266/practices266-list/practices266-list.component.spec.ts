import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practices266ListComponent } from './practices266-list.component';

describe('Practices266ListComponent', () => {
  let component: Practices266ListComponent;
  let fixture: ComponentFixture<Practices266ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practices266ListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practices266ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
