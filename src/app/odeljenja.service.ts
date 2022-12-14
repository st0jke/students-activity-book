import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OdeljenjaService {

  constructor() { }
  getOdeljenja(){
    return ["I1","I2","II1","II2","II3","III1","III2","III3","IV1","IV2","IV3"]
  }
}
