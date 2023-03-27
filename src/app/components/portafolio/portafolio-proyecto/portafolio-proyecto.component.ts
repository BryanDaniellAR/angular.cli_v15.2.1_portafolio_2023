import { Component,OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-portafolio-proyecto',
  templateUrl: './portafolio-proyecto.component.html',
  styleUrls: ['./portafolio-proyecto.component.scss']
})
export class PortafolioProyectoComponent implements OnInit{
  private urlapi = environment.APP_URL;
  public currentPortafolio: any = [];
  constructor(private httpClient: HttpClient,private sanitizer:DomSanitizer) {}
  isDone=false;
  myTrustedURL: any;
  ngOnInit() {
    this.getLanguageDomain();
  }
  private getLanguageDomain() {
    const url_option = 'files';
    const url = `${this.urlapi}${url_option}`;
    let portafolios:any = [];
    this.httpClient
      .get(url)
      .subscribe({
        next: (data)=>{
          Object.entries(data).forEach(([key, value]) => {
            if(value.usability!=null){
              if(value.usability.name == 'portafolio'){
                portafolios.push(value);
              }
            }
          });
          this.currentPortafolio = portafolios;
          this.isDone=true;
        },
        error: function(err){},
        complete: function(){}
      });
      
  }
}
