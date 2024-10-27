import { Component } from '@angular/core';
import { SliderService } from '../slider.service';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider-count',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-count.component.html',
  styleUrl: './slider-count.component.scss'
})
export class SliderCountComponent {
  slides = environment.slides;
  currentSlide = 0;

  constructor(private sliderService: SliderService) {
    sliderService.$currentSlide.subscribe(slideIndex => this.currentSlide = slideIndex);
  }

  getCount() {
    return this.toRoman(this.currentSlide + 1)
  }

  toRoman(num: number) {
    const romanMap = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];

    let result = '';

    for (const { value, numeral } of romanMap) {
      while (num >= value) {
        result += numeral;
        num -= value;
      }
    }

    return result;
  }
}
