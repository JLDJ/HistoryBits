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


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = TabsPage;

  pages: Array<{title: string, component: any}>;

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

    this.pages = [
      { title: 'About', component: AboutPage },
      { title: 'Settings', component: SettingsPage},
      { title: 'Contact', component: ContactPage },
      { title: 'Favorites', component: FavoritesPage },
    ];
  }
   openPage(page) {
    this.nav.push(page.component);
    this.menuCtrl.close();
  }  
}
