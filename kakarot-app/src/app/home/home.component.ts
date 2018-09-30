
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public welcomeMessage: string;
  public inputText: string;
  public todoList: any[];
  data: any = [];
  delRow;

  constructor() {

  }

  ngOnInit() {
    this.welcomeMessage = 'Welcome to Kakarot!';
    this.todoList = [];
  }


  doSomething() {
    this.todoList.push(this.inputText);
  }

 delete(item, index){

    this.todoList.splice(index, 1);
 }

}
