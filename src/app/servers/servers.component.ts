import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addNewServer = false;
  createNewServerStatus = 'NO Server was created!!';
  constructor() {
    setTimeout(() => {
      this.addNewServer = true;
    }, 3000);
   }

  ngOnInit() {
  }

  getServerStatus(){
    this.createNewServerStatus='New Server is created';
  }
}
