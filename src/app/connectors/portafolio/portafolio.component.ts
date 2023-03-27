import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts/cargar-scripts.service';
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent {
  constructor(private _CargarScritps:CargarScriptsService){
    _CargarScritps.Carga(["portafolio"]);
  }
}
