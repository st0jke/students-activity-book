import { Component, OnInit } from '@angular/core';
import { OdeljenjaService } from '../odeljenja.service';

@Component({
  selector: 'app-prikaz-odeljenja',
  templateUrl: './prikaz-odeljenja.component.html',
  styleUrls: ['./prikaz-odeljenja.component.css']
})
export class PrikazOdeljenjaComponent implements OnInit {

  constructor(private odeljenjeServis: OdeljenjaService) { }
  spisak_odeljenja = this.odeljenjeServis.getOdeljenja();
  ngOnInit(): void {
  }

}
