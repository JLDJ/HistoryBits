import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { NavController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage} from '../pages/settings/settings';
import { PostPage } from '../pages/post/post';
import { SignInPage} from '../pages/sign-in/sign-in';
import { FavoritesPage } from '../pages/favorites/favorites';
import { SearchPage } from '../pages/search/search';
import { AfterViewInit} from '@angular/core/index';
import { FormsModule } from '@angular/forms';
import {Camera} from 'ionic-native';
import {newsFeedService} from '../services/newsFeed.service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = TabsPage;
  AboutPage = AboutPage;
  SettingsPage = SettingsPage;
  ContactPage = ContactPage;
  FavoritesPage = FavoritesPage;
  SignInPage = SignInPage;

  

 // ngAfterViewInit() {
    // Let's navigate from TabsPage to Page1
  //  this.nav.push(SignInPage);
 // }

  constructor(platform: Platform, public menuCtrl: MenuController) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });



   // ngAfterViewInit() {
    // Let's navigate from TabsPage to Page1
  //  this.nav.push(SignInPage);
 // }
  }
   openPage(page: Component) {
    console.log("Opening page: " + page)
    this.nav.push(page);
    this.menuCtrl.close();
  }  

  signOut(){
    //Need splash page until logout is successful
    console.log("Signing out")
    this.nav.push(SignInPage);
  }

}
