import { Component, OnInit } from '@angular/core';
import {Skills} from '../core/interfaces/skills';
import {SkillsService} from '../core/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Array<Skills> = [];
  constructor(
    private skillsService: SkillsService
  ){}

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
  }

}
