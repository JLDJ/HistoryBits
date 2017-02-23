import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PictureCard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-picture-card',
  templateUrl: 'picture-card.html'
})
export class PictureCardPage {
  username: string;
  date: string;
  caption: string;
  likeCount: number;
  numberOfComments: number;
  timeStamp: string;
  picture: any;
  profilePic: any;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //Need some sort of method / service to fill in this informtion from an API that calls the database
   //For now we can make stuff up

    this.username = "Billy Bob";
    this.date = "2/22/2017";
    this.caption = "The caption goes here";
    this.likeCount = 0;
    this.numberOfComments = 0;
    this.timeStamp = "Posted 3 Hours Ago";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PictureCardPage');
  }

  
  


}
