import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  public eventEmit: any;

  constructor() {
    this.eventEmit = new EventEmitter();
  }
}
