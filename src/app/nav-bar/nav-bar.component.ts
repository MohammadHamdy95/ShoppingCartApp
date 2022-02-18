import {Component, OnInit} from '@angular/core';
import {Websitestate} from "../types/websitestate";
import {WebsitestateService} from "../services/websitestate.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private websitestate: WebsitestateService) { }

  UpdateState(): void {
    this.websitestate.setWebsiteState(Websitestate.SHOPPINGPAGE)
  }

  ngOnInit(): void {
  }

}
