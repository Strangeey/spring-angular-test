import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg='';


  constructor(private userservice : UserService, private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.userservice.loginUser(this.user).subscribe(
      data =>{
        console.log("response");
        this._router.navigate(['/articles'])
      },

      
      error=>console.log("Exception occured")); 
      this.msg="Les données que vous avez insérés ne sont pas correctes, veuillez les vérifier !", 3000;    
     
  }

}
