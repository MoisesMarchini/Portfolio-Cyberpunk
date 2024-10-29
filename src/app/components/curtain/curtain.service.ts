import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurtainService {
  private curtainAnimDuration = 750;
  private transitionOffset = 0;
  private stateSubject = new BehaviorSubject(CurtainState.open);
  $state = this.stateSubject.asObservable();

  constructor() {
    this.$state.subscribe(curtainState =>this.changeState(curtainState))
  }

  private changeState(curtainState: CurtainState) {
    const timeOut = (state: CurtainState) => {
      setTimeout(() => {
        this.stateSubject.next(state);
      }, this.curtainAnimDuration + this.transitionOffset);
    }

    switch (curtainState) {
      case CurtainState.opening:
          timeOut(CurtainState.open);
        break;
      case CurtainState.closing:
          timeOut(CurtainState.closed);
        break;
    }
  }

  open() {
    this.stateSubject.next(CurtainState.opening);
    return this.$state;
  }

  close() {
    this.stateSubject.next(CurtainState.closing);
    return this.$state;
  }

}

export enum CurtainState {
  opening = 'opening',
  open = 'open',
  closing = 'closing',
  closed = 'closed',
}
