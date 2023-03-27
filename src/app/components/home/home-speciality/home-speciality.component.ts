import { Component,OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home-speciality',
  templateUrl: './home-speciality.component.html',
  styleUrls: ['./home-speciality.component.scss']
})
export class HomeSpecialityComponent implements OnInit{
  private urlapi = environment.APP_URL;
  public currentProfileFile: any = [];
  constructor(private httpClient: HttpClient) {}
  isDone=false;
  ngOnInit() {
    this.getProfileFiles();
  }
  private getProfileFiles() {
    const url_option = 'files';
    const url = `${this.urlapi}${url_option}`;
    let profilesfiles:any = [];
    this.httpClient
      .get(url)
      .subscribe({
        next: (data)=>{
          Object.entries(data).forEach(([key, value]) => {
            if(value.usability!=null){
              if(value.usability.name == 'speciality'){
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
