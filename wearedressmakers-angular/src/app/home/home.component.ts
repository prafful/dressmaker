import { Component, OnInit } from '@angular/core';
import { AddUserService } from '../services/add-user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  addUserForm:any

  constructor(private addUserService:AddUserService) { }

  ngOnInit() {
  }

  addUserFromHomePage(fv){
    console.log("Form Value: ");
    console.log(fv)
    this.addUserService.addUser(fv).subscribe(response => {
      console.log(response);
    })
  }

}
