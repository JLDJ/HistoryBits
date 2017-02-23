import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the StoryCard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-story-card',
  templateUrl: 'story-card.html'
})
export class StoryCardPage {

  username: string;
  date: string;
  caption: string;
  likeCount: number;
  numberOfComments: number;
  timeStamp: string;
  //picture: any;
  //profilePic: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = "Billy Bob";
    this.date = "2/22/2017";
    this.caption = "The story goes here";
    this.likeCount = 0;
    this.numberOfComments = 0;
    this.timeStamp = "Posted 3 Hours Ago";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryCardPage');
  }

}
