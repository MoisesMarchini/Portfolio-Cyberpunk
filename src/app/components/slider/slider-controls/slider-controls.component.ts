import { Component, Input, Output } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';
import { SliderService } from '../slider.service';

@Component({
  selector: 'app-slider-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-controls.component.html',
  styleUrl: './slider-controls.component.scss'
})
export class SliderControlsComponent {
  @Input() slidesAmount = environment.slides.length;
  currentIndex = 0;

  constructor(private sliderService: SliderService) {
    sliderService.$currentSlide.subscribe(slideIndex => this.currentIndex = slideIndex);
  }
}
