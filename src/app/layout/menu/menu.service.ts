import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CurtainService } from '../../components/curtain/curtain.service';
import { SliderService } from '../../components/slider/slider.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private isOpenSubject = new BehaviorSubject(false);
  $isOpen = this.isOpenSubject.asObservable();

  constructor(private curtainService: CurtainService, private sliderService: SliderService) {
    this.$isOpen.subscribe(isOpen => {
      sliderService.toggleAutoplay(isOpen? 'pause' : 'resume');
    })
  }

  open() {
    this.curtainService.open().subscribe(state => {
      if (state === 'open')
        this.isOpenSubject.next(true);
    });
  }

  close() {
    this.isOpenSubject.next(false);
    this.curtainService.close();
  }
}
