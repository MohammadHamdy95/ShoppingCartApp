import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  button(): void {
    this.show = !this.show;
  }

}
