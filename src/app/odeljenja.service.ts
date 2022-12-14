import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OdeljenjaService {

  constructor() { }
  getOdeljenja(){
    return ["I1","I2"]
  }
}
