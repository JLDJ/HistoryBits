import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage} from '../pages/settings/settings';
import { PostPage } from '../pages/post/post';
import { SignInPage} from '../pages/sign-in/sign-in';
import { NavController } from 'ionic-angular';
import { FavoritesPage } from '../pages/favorites/favorites';
import { SearchPage } from '../pages/search/search';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfilePage,
    SettingsPage,
    PostPage,
    SignInPage,
    FavoritesPage,
    SearchPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfilePage,
    SettingsPage,
    PostPage,
    SignInPage,
    FavoritesPage,
    SearchPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
