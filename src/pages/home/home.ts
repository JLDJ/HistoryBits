import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { PictureCardPage } from '../picture-card/picture-card';
import { StoryCardPage } from '../story-card/story-card';
import {newsFeedService} from '../../services/newsFeed.service';


//We should have news feed default to posts from around your current area!!! or other specified settings
//Need to allow users to customise what they see in their news feed

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [newsFeedService]
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
  isPicture: boolean,
  isStory: boolean,
  //picture: any,
  //profilePic: any
} [] = new Array();

  //Test webAPI call for fake posts
  posts: Post[];


  pictureAlternate: boolean = true;
  storyAlternate: boolean = false;

  title = "Home";
  constructor(public navCtrl: NavController, private newsFeed: newsFeedService) {

    //Need to transform this WebAPI call to load more posts / impliment with infinite scroll
    this.newsFeed.getPosts().subscribe(posts => {
      this.posts = posts;
    });

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

  doInfinite(infiniteScroll) {
    console.log('Begin async operation, loading more items for new feed.');

    //Use Web API here to fetch more posts
    //Grab this JSON data and push it onto an array
    //Loop through the array grabbing the data and filling in the card/post 

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
      infiniteScroll.complete();
    }, 2000);
  }

  //Need to somehow reference which card got liked, update the likes in the cardInfo array and then update the server via a web API call
  liked(){
    //this.likeCount++;
  }

}

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
