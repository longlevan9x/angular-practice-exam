import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomizeModalComponent } from './view-customize-modal.component';

describe('ViewCustomizeModalComponent', () => {
  let component: ViewCustomizeModalComponent;
  let fixture: ComponentFixture<ViewCustomizeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCustomizeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCustomizeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
