import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text!: null;
  pass!: null;
  onSubmit(newForm: NgForm) {
    console.log(newForm.value);
  }
}
