import { Component } from '@angular/core';
import {Amplify, Auth} from "aws-amplify";
import awsConfig from '../aws-exports'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';
  constructor() {
    Amplify.configure(awsConfig)
    Auth.configure(awsConfig);
  }
}
