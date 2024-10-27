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
  loaded = false;

  constructor(private windowService: WindowService, private curtainService: CurtainService) {
    windowService.getValueAsObservable('load').subscribe(isLoaded => {
      this.loaded = isLoaded;
      if (isLoaded == true) {
        setTimeout(() => {
          curtainService.close();
        }, 600);
      }
    });
  }
}
