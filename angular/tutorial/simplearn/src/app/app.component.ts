import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simplearn';

  public name = "Simplilearn"
  public topic = "Data binding"
  public value = "";

  public image = "/assets/out-cold.png"

  onClick() {
    console.log("Thank you for subscribing!");
  }
}
