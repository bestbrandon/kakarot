
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public welcomeMessage: string;
  public inputText: string;


  constructor() {

  }

  ngOnInit() {
    this.welcomeMessage = 'Welcome to Kakarot!';
  }


  doSomething() {
    console.log(this.inputText);
  }

}
