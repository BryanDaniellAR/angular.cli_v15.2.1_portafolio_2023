import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts/cargar-scripts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio-web';
  constructor(private _CargarScritps:CargarScriptsService){
    _CargarScritps.Carga(["app"]);
  }
}
