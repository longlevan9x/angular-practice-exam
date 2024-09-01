import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice266BookmarkComponent } from './practice266-bookmark.component';

describe('Practice266BookmarkComponent', () => {
  let component: Practice266BookmarkComponent;
  let fixture: ComponentFixture<Practice266BookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice266BookmarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice266BookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
