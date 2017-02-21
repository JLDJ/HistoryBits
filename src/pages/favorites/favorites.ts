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
  items = [];
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
        this.items.push(`<ion-card class="favoritesCard">

  <ion-item class=favoritesCard>
    <ion-avatar item-left>
      <img src="../assets/pictures/marty-avatar.png">
    </ion-avatar>
    <h2>Marty McFly</h2>
    <p>November 5, 1955</p>
  </ion-item>

  <img src="../assets/pictures/carpic.png" >

  <ion-card-content>
    
    <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>
  </ion-card-content>

  <ion-row>
    <ion-col>
      <button ion-button icon-left clear small (click)="liked()">
        <ion-icon name="thumbs-up"></ion-icon>
        <div> Likes {{likeCount}}</div>
      </button>
    </ion-col>
    <ion-col>
      <!-- May need a popover for comments -->
      <button ion-button icon-left clear small>
        <ion-icon name="text"></ion-icon>
        <div>4 Comments</div>
      </button>
    </ion-col>
    <ion-col center text-center>
      <ion-note>
        11h ago
      </ion-note>
    </ion-col>
  </ion-row>
</ion-card>`);
      }

      console.log('Async operation has ended, items loaded.');
      infiniteScroll.complete();
    }, 2000);
  }

}
