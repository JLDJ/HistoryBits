import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { PictureCardPage } from '../picture-card/picture-card';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

  title = "Home";
  constructor(public navCtrl: NavController) {
    //This would be more the initial loading of the news feed
    //for (let i = 0; i < 30; i++) {
     // this.items.push(``);
 // }
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation, loading more items for new feed.');

    //Use Web API here to fetch more posts
    //Grab this JSON data and push it onto an array
    //Loop through the array grabbing the data and filling in the card/post 

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

  liked(){
    //this.likeCount++;
  }

}
