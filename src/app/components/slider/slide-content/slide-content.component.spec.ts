import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideContentComponent } from './slide-content.component';

describe('SlideContentComponent', () => {
  let component: SlideContentComponent;
  let fixture: ComponentFixture<SlideContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
