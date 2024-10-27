import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  private props = new Map<string, string | number>();
  private propsSubject = new BehaviorSubject(this.props);

  constructor() { }

  set(key: string, value: string | number) {
    this.props.set(key, value);
    this.propsSubject.next(this.props)
  }

  getValue(key: string) {
    return this.props.get(key);
  }

  getValueAsObservable(key: string) {
    return this.propsSubject.asObservable().pipe(
      map(values=> values.get(key))
    )
  }
}
