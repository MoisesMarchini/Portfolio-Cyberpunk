import { Component, Input } from '@angular/core';
import { Slide, SlideState } from '../../../models/slide';
import { CommonModule } from '@angular/common';
import { SliderService } from '../slider.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-slide-frame',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-frame.component.html',
  styleUrl: './slide-frame.component.scss'
})
export class SlideFrameComponent {
  @Input() slide: Slide = new Slide();
  @Input() slidesAmount = environment.slides.length;
  currentSlideIndex = 0;

  constructor(private sliderService: SliderService) {
    sliderService.$currentSlide.subscribe(slideIndex => {
      this.currentSlideIndex = slideIndex;
      this.loadSlideState();
    });
  }

  ngOnInit() {
    this.loadSlideState();
  }

  private loadSlideState() {
    const slideIndex = this.slide.index;

    if (slideIndex == this.sliderService.getPreviousSlideIndex()){
      this.slide.state = SlideState.prev;
      return;
    }
    if (slideIndex == this.currentSlideIndex){
      this.slide.state = SlideState.curr;
      return;
    }
    if (slideIndex == this.sliderService.getNextSlideIndex()){
      this.slide.state = SlideState.next;
      return;
    }

    this.slide.state = SlideState.undefined;
  }
}
