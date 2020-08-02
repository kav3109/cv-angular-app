import { Component, OnInit } from '@angular/core';
import {Experience} from '../core/interfaces/experience';
import {ExperienceService} from '../core/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiense: Array<Experience> = [];
  constructor(
    private experienceService: ExperienceService
  ){}

  ngOnInit(): void {
    this.experiense = this.experienceService.getExperience();
  }

}
