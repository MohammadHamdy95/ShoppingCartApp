import { Component } from '@angular/core';
import {Amplify} from "aws-amplify";
import awsConfig from '../ '

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';
  constructor() {
    Amplify.configure(A)
  }
}
