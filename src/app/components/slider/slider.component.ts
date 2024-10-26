import { ChangeDetectorRef, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SlideFrameComponent } from "./slide-frame/slide-frame.component";
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { SliderControlsComponent } from "./slider-controls/slider-controls.component";
import { SliderService } from './slider.service';
import { SwiperContainer, SwiperSlide } from 'swiper/element';
import { SlideContentComponent } from "./slide-content/slide-content.component";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SlideFrameComponent, CommonModule, SliderControlsComponent, SlideContentComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderComponent {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @ViewChildren('swiperSlide') swiperSlides!: QueryList<any>;
  slides = environment.slides;

  constructor(private sliderService: SliderService) {
  }

  ngAfterViewInit() {
    this.sliderService.setSwiperElRef(this.swiperContainer);
  }
}
