import { Component,OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-contact-fanpage',
  templateUrl: './contact-fanpage.component.html',
  styleUrls: ['./contact-fanpage.component.scss']
})
export class ContactFanpageComponent {
  private urlapi = environment.APP_URL;
  public currentProfileContact: any = [];
  constructor(private httpClient: HttpClient) {}
  isDone=false;
  ngOnInit() {
    this.getProfileFiles();
  }
  private getProfileFiles() {
    const url_option = 'files';
    const url = `${this.urlapi}${url_option}`;
    let profilescontacts:any = [];
    this.httpClient
      .get(url)
      .subscribe({
        next: (data)=>{
          Object.entries(data).forEach(([key, value]) => {
            if(value.usability!=null){
              if(value.usability.name == 'contact'){
                profilescontacts.push(value);
              }
            }
          });
          this.currentProfileContact = profilescontacts;
          this.isDone=true;
        },
        error: function(err){},
        complete: function(){}
      });
  }
}
