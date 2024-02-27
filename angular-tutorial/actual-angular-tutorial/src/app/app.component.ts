import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RoomsComponent} from "./rooms/rooms.component";

@Component({//decorators, modify behaviour of class
  selector: 'hinv-root', //html tag! what i will create are multiple html tag... ll PREFIX!!! see angular.json
  standalone: true,
  imports: [RouterOutlet, RoomsComponent], //here all the module have to be added...
  templateUrl: './app.component.html', //we will change the html file
  // template:"<h1>hello world from inline template</h1>",
  styleUrl: './app.component.scss'
  //is possible to have inline style...
})
export class AppComponent { //first component,
  title = 'actual-angular-tutorial';
}
