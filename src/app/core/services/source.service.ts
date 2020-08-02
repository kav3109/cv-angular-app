import { Injectable } from '@angular/core';
import {Source} from '../interfaces/source';
import {SOURCE} from '../data/source.mock';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  constructor() {}
  getSource(): Array<Source>{
    return SOURCE;
  }
}
