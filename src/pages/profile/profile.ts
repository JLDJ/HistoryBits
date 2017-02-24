import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
   //Need to create components for the profile page and services to fetch the required info
   bio: string = "Bio goes here...";
   name: string = "Marty McFly";
   numberOfPosts: number = 0;
   contributions: number = 0;
   followers: number = 0;
   myBits: any = "History Bits here...";
   recentContributions: any = "Recent Contributions";
   followedBits: any = "Bits being followed here...";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  //Use a service to fetch profile info
  fetchProfileInfo(){

  }

}
