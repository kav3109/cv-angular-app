import { Component, OnInit } from '@angular/core';
import {Personal} from '../core/interfaces/personal';
import {PersonalService} from '../core/services/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  personal: Array<Personal> = [];

  constructor(
    private personalService: PersonalService
  ){}

  ngOnInit(): void {
    this.personal = this.personalService.getPersonal();
  }

}
