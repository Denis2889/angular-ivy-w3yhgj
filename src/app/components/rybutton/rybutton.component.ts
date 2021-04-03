import { Component } from "@angular/core";

@Component({
  templateUrl: "./rybutton.component.html",
  selector: "ry-button",
  styleUrls: ["./rybutton.component.css"]
})
export class RybuttonComponent {
  n: number = 3;

  presionar() {
    this.n += 1;
  }
}
