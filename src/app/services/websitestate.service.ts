import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Websitestate} from "../types/websitestate";

@Injectable({
  providedIn: 'root'
})
export class WebsitestateService {
  private websitestate = new BehaviorSubject<Websitestate>(Websitestate.LANDINGPAGE);

  websitestate$ = this.websitestate.asObservable();


  setWebsiteState(websitestate: Websitestate): void {
    this.websitestate.next(websitestate)
  }
}
