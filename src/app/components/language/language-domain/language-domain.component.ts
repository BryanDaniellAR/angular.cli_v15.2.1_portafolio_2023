import { Component,OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-language-domain',
  templateUrl: './language-domain.component.html',
  styleUrls: ['./language-domain.component.scss']
})
export class LanguageDomainComponent implements OnInit{
  private urlapi = environment.APP_URL;
  public currentLanguage: any = [];
  constructor(private httpClient: HttpClient) {}
  isDone=false;
  
  ngOnInit() {
    this.getLanguageDomain();
  }
  private getLanguageDomain() {
    const url_option = 'files';
    const url = `${this.urlapi}${url_option}`;
    let languages:any = [];
    this.httpClient
      .get(url)
      .subscribe({
        next: (data)=>{
          Object.entries(data).forEach(([key, value]) => {
            if(value.usability!=null){
              if(value.usability.name == 'language'){
                languages.push(value);
              }
            }
          });
          this.currentLanguage = languages;
          this.isDone=true;
        },
        error: function(err){},
        complete: function(){}
      });
      
  }
}