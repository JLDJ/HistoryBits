import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ProfilePage } from '../profile/profile';
import { SettingsPage} from '../settings/settings';
import { PostPage} from '../post/post';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ProfilePage;
  tab3Root: any = PostPage;
  tab4Root: any = AboutPage;
  tab5Root: any = SettingsPage;

  constructor() {

  }
}
