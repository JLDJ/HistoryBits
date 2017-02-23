import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PictureCardPage } from '../picture-card/picture-card';
import { StoryCardPage } from '../story-card/story-card';



/*
  Generated class for the Favorites page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  cardInfo : {
  username: string,
  date: string,
  caption: string,
  likeCount: number,
  numberOfComments: number,
  timeStamp: string,
  isPicture: boolean,
  isStory: boolean,
  //picture: any,
  //profilePic: any
} [] = new Array();


  pictureAlternate: boolean = true;
  storyAlternate: boolean = false;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
     //This would be more the initial loading of the news feed
  setTimeout(() => {
      for (let i = 0; i < 5; i++) {
          //Dummy Data until we have backend working
          if(this.pictureAlternate){
            this.pictureAlternate = false;
            this.storyAlternate = true;
          }else {
            this.pictureAlternate = true;
            this.storyAlternate = false;
          }

          this.cardInfo.push({
          username : "Billy Bob",
          date : "2/22/2017",
          caption : "The caption goes here",
          likeCount : 0,
          numberOfComments : 0,
          timeStamp : "Posted 3 Hours Ago",
          isPicture : this.pictureAlternate,
          isStory : this.storyAlternate
        })   
      }
      console.log('Async operation has ended. finished loading items for new feed.');
    }, 2000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }


  doInfinite(infiniteScroll) {
    console.log('Begin async operation, loading more items for favorites feed.');

    setTimeout(() => {
      for (let i = 0; i < 10; i++) {

            if(this.pictureAlternate){
            this.pictureAlternate = false;
            this.storyAlternate = true;
          }else {
            this.pictureAlternate = true;
            this.storyAlternate = false;
          }

          //Dummy Data until we have backend working
          this.cardInfo.push({
          username : "Billy Bob",
          date : "2/22/2017",
          caption : "The caption goes here",
          likeCount : 0,
          numberOfComments : 0,
          timeStamp : "Posted 3 Hours Ago",
          isPicture : this.pictureAlternate,
          isStory : this.storyAlternate
        })
          
      }

      console.log('Async operation has ended. finished loading items for new feed.');
      infiniteScroll.complete();
    }, 2000);
  }

}
