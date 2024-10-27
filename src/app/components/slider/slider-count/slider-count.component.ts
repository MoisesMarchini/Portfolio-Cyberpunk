import { Component } from '@angular/core';
import { SliderService } from '../slider.service';

@Component({
  selector: 'app-slider-count',
  standalone: true,
  imports: [],
  templateUrl: './slider-count.component.html',
  styleUrl: './slider-count.component.scss'
})
export class SliderCountComponent {
  private currentSlide = 0;

  constructor(private sliderService: SliderService) {
    sliderService.$currentSlide.subscribe(slideIndex => this.currentSlide = slideIndex);
  }

  getCount() {
    const slideIndex = this.currentSlide + 1;
    if (slideIndex > 9)
      return slideIndex.toString();

    return `0${slideIndex}`
  }
}
