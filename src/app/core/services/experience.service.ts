import { Injectable } from '@angular/core';
import {Experience} from '../interfaces/experience';
import {EXPERIENCE} from '../data/experience.mock';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() {}
  getExperience(): Array<Experience>{
    return EXPERIENCE;
  }
}
