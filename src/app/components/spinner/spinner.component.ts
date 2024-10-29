import { Component } from '@angular/core';
import { WindowService } from '../../services/window.service';
import { CurtainService } from '../curtain/curtain.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  minSpinnerDuration = 1000;
  loaded = false;

  constructor(private windowService: WindowService, private curtainService: CurtainService) {
    windowService.getValueAsObservable('load').subscribe((isLoaded: boolean) => this.onLoaded(isLoaded));
  }

  private onLoaded(isLoaded: boolean) {
    if (this.loaded == isLoaded) return;

    const timerNow = performance.now();
    const timerDiff = this.minSpinnerDuration - timerNow;
    if(isLoaded && timerDiff > 0){
      setTimeout(() => {
        this.onLoaded(isLoaded)
      }, timerDiff);
      return;
    }


    this.loaded = isLoaded;
    if (isLoaded) {
      setTimeout(() => {
        this.curtainService.close();
      }, 600);
    }
  }
}
