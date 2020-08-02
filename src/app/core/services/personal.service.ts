import { Injectable } from '@angular/core';
import {Personal} from '../interfaces/personal';
import {PERSONALS} from '../data/personals.mock';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor() {}
  getPersonal(): Array<Personal>{
    return PERSONALS;
  }
}
