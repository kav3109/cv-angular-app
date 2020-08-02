import { Injectable } from '@angular/core';
import {Skills} from '../interfaces/skills';
import {SKILLS} from '../data/skills.mock';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() {}
  getSkills(): Array<Skills>{
    return SKILLS;
  }
}
