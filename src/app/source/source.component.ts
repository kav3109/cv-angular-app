import { Component, OnInit } from '@angular/core';
import {Source} from '../core/interfaces/source';
import {SourceService} from '../core/services/source.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss']
})
export class SourceComponent implements OnInit {

  source: Array<Source> = [];
  constructor(
    private sourceService: SourceService
  ){}

  ngOnInit(): void {
    this.source = this.sourceService.getSource();
  }

}
