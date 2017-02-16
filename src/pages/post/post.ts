import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PictureTemplatePage } from '../picture-template/picture-template';
import { StoryTemplatePage } from '../story-template/story-template';

/*
  Generated class for the Post page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {

  pictureTemplate: boolean = false;
  storyTemplate: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  setPictureTemplate(){
    this.storyTemplate = false;
    this.pictureTemplate = true;
    console.log("User selected picture template.");
  }

  setStoryTemplate(){
    this.pictureTemplate = false;
    this.storyTemplate = true;
    console.log("User selected story template");
  }

  openCamera(){
    console.log("Opening Camera");
  }

}
