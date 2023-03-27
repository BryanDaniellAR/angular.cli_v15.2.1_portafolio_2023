import { Component,OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CargarScriptsService } from 'src/app/services/cargar-scripts/cargar-scripts.service';

@Component({
  selector: 'app-home-name',
  templateUrl: './home-name.component.html',
  styleUrls: ['./home-name.component.scss']
})
export class HomeNameComponent implements OnInit{
  private urlapi = environment.APP_URL;
  public currentProfile: any = [];
  public currentProfileFile: any = [];
  constructor(private httpClient: HttpClient) {}
  isDone=false;
  ngOnInit() {
    this.getProfile();
    this.getProfileFiles();
  }
  private getProfile() {
    const url_option = 'profiles';
    const url = `${this.urlapi}${url_option}`;
    let profiles:any = [];
    this.httpClient
      .get(url)
      .subscribe({
        next: (data)=>{
          Object.entries(data).forEach(([key, value]) => {
            profiles.push(value);
          });
          this.currentProfile = profiles;
          this.isDone=true;
        },
        error: function(err){},
        complete: function(){}
      });
  }
  private getProfileFiles() {
    const url_option = 'files';
    const url = `${this.urlapi}${url_option}`;
    let profilesfiles:any = [];
    let profilesimage:any = [];
    this.httpClient
      .get(url)
      .subscribe({
        next: (data)=>{
          Object.entries(data).forEach(([key, value]) => {
            if(value.usability!=null){
              if(value.usability.name == 'fanpage'){
                profilesfiles.push(value);
              }
            }
          });
          this.currentProfileFile = profilesfiles;
          this.isDone=true;
        },
        error: function(err){},
        complete: function(){}
      });
  }
}
