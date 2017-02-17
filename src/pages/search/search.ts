import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Nav, Platform } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
   @ViewChild(Nav) nav: Nav;

   
   //Need to create a Key / Value pair array here....

   who: string;
   what: string;
   where: string;
   when: string;
   type: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  submitSearch(){
    console.log('Search Submitted');
    console.log('Display Search Parameters here');
    //this.nav.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  test(testValue){
    console.log(this.who);
  }

}
