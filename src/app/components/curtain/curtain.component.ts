import { Component } from '@angular/core';
import { CurtainService } from './curtain.service';

@Component({
  selector: 'app-curtain',
  standalone: true,
  imports: [],
  templateUrl: './curtain.component.html',
  styleUrl: './curtain.component.scss'
})
export class CurtainComponent {
  timeout = 2500;
  isOpen = true;
  blankVal = false;

  constructor(private curtainService: CurtainService) {
    curtainService.$isOpen.subscribe(_isOpen => {
      this.blankVal = false;
      this.isOpen = _isOpen
      if (!_isOpen) {
        setTimeout(() => {
          this.blankVal = true;
        }, this.timeout);
      }
    });
  }
}
