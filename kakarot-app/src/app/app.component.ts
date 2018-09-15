import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public welcomeMessage: string;



  constructor() {

  }

  ngOnInit() {
    this.welcomeMessage = 'Welcome to Kakarot!';
  }
}


