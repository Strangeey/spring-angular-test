import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = new User();
  public users: User[];
  msg='';

  constructor(private userservice : UserService, private _router : Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.userservice.registerUser(this.user).subscribe(
      data =>{
        console.log("reponse");
        this._router.navigate(['/login'])
      },
      error=>console.log("Exception occured")); 
      this.msg="Adresse mail deja utilisé ! ";
    
     
  }

}
