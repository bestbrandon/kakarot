import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public welcomeMessage: string;



  constructor(private http: HttpClient) {
    this.welcomeMessage = 'Welcome to Kakarot!';
  }

  ngOnInit() {
    console.log('in init');
    this.http.get('http://localhost:8080/services_war_exploded/services/getName', {
      headers: {"Access-Control-Allow-Origin" : "*"}
    })
      .subscribe(data => {
        console.log(data);
      });
  }
}


