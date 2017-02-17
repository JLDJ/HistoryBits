import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Home";

  constructor(public navCtrl: NavController) {

  }

}
