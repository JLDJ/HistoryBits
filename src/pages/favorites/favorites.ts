import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  //picture: any,
  //profilePic: any
} [] = new Array();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   // for (let i = 0; i < 30; i++) {
   //   this.items.push( this.items.length );
  //}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }


  doInfinite(infiniteScroll) {
    console.log('Begin async operation, loading more items for favorites feed.');

    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
          //Dummy Data until we have backend working
          this.cardInfo.push({
          username : "Billy Bob",
          date : "2/22/2017",
          caption : "The caption goes here",
          likeCount : 0,
          numberOfComments : 0,
          timeStamp : "Posted 3 Hours Ago"
        })
          
      }

      console.log('Async operation has ended. finished loading items for new feed.');
      infiniteScroll.complete();
    }, 2000);
  }

}
