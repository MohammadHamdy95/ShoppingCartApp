import { Component, OnInit } from '@angular/core';
import {Websitestate} from "../types/websitestate";
import {WebsitestateService} from "../services/websitestate.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  PageState = Websitestate;
  state = Websitestate.LANDINGPAGE;

  constructor(private websitestate: WebsitestateService) {
    websitestate.websitestate$.subscribe(state=>{
      this.state=state;
    })
  }

  ngOnInit(): void {
  }

}
