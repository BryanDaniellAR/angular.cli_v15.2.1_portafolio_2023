import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts/cargar-scripts.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  constructor(private _CargarScritps:CargarScriptsService){
    _CargarScritps.Carga(["contacto"]);
  }
}
