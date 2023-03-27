import { Component,OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-about-experience',
  templateUrl: './about-experience.component.html',
  styleUrls: ['./about-experience.component.scss']
})
export class AboutExperienceComponent implements OnInit{
  private urlapi = environment.APP_URL;
  public currentProfileWork: any = [];
  constructor(private httpClient: HttpClient) {}
  isDone=false;
  ngOnInit() {
    this.getProfileFiles();
  }
  private getProfileFiles() {
    const url_option = 'files';
    const url = `${this.urlapi}${url_option}`;
    let profileswork:any = [];
    this.httpClient
      .get(url)
      .subscribe({
        next: (data)=>{
          Object.entries(data).forEach(([key, value]) => {
            if(value.usability!=null){
              if(value.usability.name == "work"){
                profileswork.push(value);
              }
            }
          });
          this.currentProfileWork = profileswork;
          this.isDone=true;
        },
        error: function(err){},
        complete: function(){}
      });
  }
}
