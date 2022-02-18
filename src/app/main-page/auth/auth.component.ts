import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user: string = "";
  confirmationToggle: boolean=false;

  constructor(private fb:FormBuilder) { }
  profileForm = this.fb.group({
    userName: ["", [Validators.required,Validators.email]],
    password: ["", [Validators.required,Validators.minLength(5)]]
  })
  confirmationForm = this.fb.group({
    confirmationCode: [""]
  })

  ngOnInit(): void {
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
    }).catch((err)=>{
      console.error(err);
      if(err.code == "UsernameExistsException"){
        console.log("user exists")
      }
    })
  }
  confirmSignUp(): void {
    Auth.confirmSignUp(this.user,this.confirmationCode).then((user)=>{
      console.info("user confirmed")
    }).catch((err)=>{
      console.error(err);
    })
}
  signIn(): void {
    this.user = this.userName;
  }

  get userName(): string {
    return this.profileForm.get("userName")?.value;
  }
  get password(): string {
    return  this.profileForm.get("password")?.value;
  }
  get confirmationCode(): string {
    return this.confirmationForm.get("confirmationCode")?.value;
  }

}
