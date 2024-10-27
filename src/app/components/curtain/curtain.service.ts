import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurtainService {
  private isOpenSubject = new BehaviorSubject(true);
  $isOpen = this.isOpenSubject.asObservable();

  constructor() { }

  open = () => this.isOpenSubject.next(true);
  close = () => this.isOpenSubject.next(false);
}
