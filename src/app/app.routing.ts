import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Router not found in C:\Users\Brian Olson\Desktop\Senior Project\History_Bits\HistoryBits\node_modules\@angular

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage} from '../pages/settings/settings';
import { PostPage } from '../pages/post/post';
import { SignInPage} from '../pages/sign-in/sign-in';
import { PictureTemplatePage } from '../pages/picture-template/picture-template';
import { StoryTemplatePage } from '../pages/story-template/story-template';
import { FavoritesPage } from '../pages/favorites/favorites';
import { SearchPage } from '../pages/search/search';


//Need to finish routing
const appRoutes: Routes = [
    {
        path: '',
        component: MyApp
    },
    {
        path: 'about',
        component: AboutPage
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


