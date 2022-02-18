import {Component, OnInit} from '@angular/core';
import {Websitestate} from "../types/websitestate";
import {WebsitestateService} from "../services/websitestate.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  header="Grocery Store"
  state=Websitestate.LANDINGPAGE

  constructor(private websitestate: WebsitestateService) {
    websitestate.websitestate$.subscribe(state=>{
      this.state=state;
    })
  }
  toggle=false;
  UpdateState(): void {
    this.toggle=!this.toggle
    this.websitestate.setWebsiteState(this.toggle?Websitestate.LANDINGPAGE:Websitestate.SHOPPINGPAGE)
  }

  ngOnInit(): void {
  }
  get Page(): string {
    switch (this.state){
      case Websitestate.CARTPAGE:
        return "Cart Page"
      case Websitestate.SHOPPINGPAGE:
        return "Shop"
      case Websitestate.LANDINGPAGE:
        return "Home"
    }
  }

}
