import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { environment } from '../../../environments/environment';
import { Parallax } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private swiperElRef?: ElementRef;
  private swiper?: Swiper;
  private slidesAmount = environment.slides.length;
  private currentSlideSubject = new BehaviorSubject(0);
  private get currentSlideIndex() { return this.currentSlideSubject.value; }
  private swiperConfig: SwiperOptions = {
    allowTouchMove: true,
    autoplay: {
      disableOnInteraction: false,
      delay: 6000
    },
    centeredSlides: true,
    direction: "vertical",
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    mousewheel: {
      releaseOnEdges: true,
      enabled: true
    },
    navigation: {
      nextEl: ".swiper-control.control-down",
      prevEl: ".swiper-control.control-up"
    },
    parallax: true,
    speed: 1200,
    on: {
      slideChange: (swiper) => this.onSlideChange(swiper),
      progress: (swiper, progress) => this.swiperProgress(swiper, progress),
    },
    modules: [Parallax]
  };


  $currentSlide = this.currentSlideSubject.asObservable();

  constructor() { }

  setSwiperElRef(swiperElRef: ElementRef) {
    this.swiperElRef = swiperElRef;
    this.swiper = swiperElRef.nativeElement.swiper;
    this.initSwiper(swiperElRef)
  }

  getNextSlideIndex() {
    return (this.currentSlideIndex + 1) % this.slidesAmount;
  }

  getPreviousSlideIndex() {
    return (this.currentSlideIndex - 1 + this.slidesAmount) % this.slidesAmount;
  }

  nextSlide() {
    this.setCurrentSlide(this.getNextSlideIndex());
  }

  previousSlide() {
    this.setCurrentSlide(this.getPreviousSlideIndex());
  }

  private initSwiper(swiperElRef: ElementRef) {
    if (!swiperElRef) return;

    Object.assign(swiperElRef.nativeElement, this.swiperConfig);
    swiperElRef.nativeElement.initialize();

    const swiper = swiperElRef.nativeElement.swiper;
    if (!swiper) return;

    this.swiper = swiper;
  }

  private onSlideChange(swiper: Swiper) {
    const currentIndex = swiper.activeIndex;
    this.currentSlideSubject.next(currentIndex)
  }

  private swiperProgress(swiper: Swiper, progress: number) {
    console.log(progress)
  }

  private setCurrentSlide(slideIndex: number) {
    this.swiper?.slideTo(slideIndex);
    this.currentSlideSubject.next(slideIndex);
  }
}
