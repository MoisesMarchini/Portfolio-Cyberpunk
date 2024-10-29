import { ChangeDetectorRef, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SlideFrameComponent } from "./slide-frame/slide-frame.component";
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { SliderControlsComponent } from "./slider-controls/slider-controls.component";
import { SliderService } from './slider.service';
import { SwiperContainer, SwiperSlide } from 'swiper/element';
import { SlideContentComponent } from "./slide-content/slide-content.component";
import { SliderCountComponent } from "./slider-count/slider-count.component";
import { CurtainService } from '../curtain/curtain.service';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SlideFrameComponent, CommonModule, SliderControlsComponent, SlideContentComponent, SliderCountComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderComponent {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @ViewChildren('swiperSlide') swiperSlides!: QueryList<any>;
  slides = environment.slides;
  loading = true;

  constructor(private sliderService: SliderService, private curtainService: CurtainService) {
    curtainService.$state.subscribe(curtainState => {
      if (curtainState !== 'open') this.loading = false;
    })
  }

  ngAfterViewInit() {
    this.sliderService.setSwiperElRef(this.swiperContainer);
  }
}
