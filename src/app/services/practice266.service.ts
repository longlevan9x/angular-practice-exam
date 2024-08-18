import { Injectable } from '@angular/core';
import { practices266 } from '../dumps/practice266.dump';

@Injectable({
  providedIn: 'root'
})
export class Practice266Service {

  constructor() { }

  getPractices(startIndex: number, endIndex: number) {
    return practices266.slice(startIndex, endIndex);
  }
}
