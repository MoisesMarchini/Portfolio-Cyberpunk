import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideFrameComponent } from './slide-frame.component';

describe('SlideFrameComponent', () => {
  let component: SlideFrameComponent;
  let fixture: ComponentFixture<SlideFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
