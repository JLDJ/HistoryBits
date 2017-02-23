import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { PictureCardPage } from '../picture-card/picture-card';
import { StoryCardPage } from '../story-card/story-card';


//We should have news feed default to posts from around your current area!!! or other specified settings
//Need to allow users to customise what they see in their news feed

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //May need some sort of Post ID to update likes / comments etc...
  //Need some sort of logic to determine if it is a picture or a story...
  cardInfo : {
  username: string,
  date: string,
  caption: string,
  likeCount: number,
  numberOfComments: number,
  timeStamp: string,
  //isPicture:
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
