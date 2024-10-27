import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCountComponent } from './slider-count.component';

describe('SliderCountComponent', () => {
  let component: SliderCountComponent;
  let fixture: ComponentFixture<SliderCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
