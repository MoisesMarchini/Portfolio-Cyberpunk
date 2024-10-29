import { Component } from '@angular/core';
import { CurtainService, CurtainState } from './curtain.service';

@Component({
  selector: 'app-curtain',
  standalone: true,
  imports: [],
  templateUrl: './curtain.component.html',
  styleUrl: './curtain.component.scss'
})
export class CurtainComponent {
  state = CurtainState.closed;

  constructor(private curtainService: CurtainService) {
    curtainService.$state.subscribe(_isOpen =>{
      this.state = _isOpen
    });
  }
}
