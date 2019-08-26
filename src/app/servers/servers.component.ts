import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addNewServer = false;
  createNewServerStatus = 'NO Server was created!!';
  serverName ='TestServer';
  createdStatus = false;
  constructor() {
    setTimeout(() => {
      this.addNewServer = true;
    }, 3000);
   }

  ngOnInit() {
  }

  getServerStatus(){
    this.createdStatus = true;
    this.createNewServerStatus='New Server is created and Serve Name= '+ this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
