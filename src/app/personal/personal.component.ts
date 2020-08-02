import { Component, OnInit } from '@angular/core';
import {Personal} from '../core/interfaces/personal';
import {PersonalService} from '../core/services/personal.service';
import {Experience} from '../core/interfaces/experience';
import {ExperienceService} from '../core/services/experience.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  personal: Array<Personal> = [];
  // car = 'Audi';
  // URL = 'https://google.com';

  constructor(
    private personalService: PersonalService,
  ){}

  ngOnInit(): void {
    this.personal = this.personalService.getPersonal();
  }

  // onClick(Event): void {
  //   console.log(Event);
  // }
}
