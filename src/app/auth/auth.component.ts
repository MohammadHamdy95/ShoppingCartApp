import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
show: boolean = false;

  constructor(private fb:FormBuilder) { }
  profileForm = this.fb.group({
    userName: ["", [Validators.required,Validators.email]],
    password: ["", [Validators.required,Validators.minLength(8)]]
  })

  ngOnInit(): void {
  }
  button(): void {
    this.show = !this.show;
  }
  singUp(): void {
    Auth.signUp({
      username: this.userName,
      password: this.password,
      attributes:{
        email:this.userName
      }
    }).then((user)=>{
      console.log(user.user.getUsername())
    })
  }
  get userName(): string {
    return this.profileForm.get("userName")?.value;
  }
  get password(): string {
    return  this.profileForm.get("password")?.value;
  }

}
