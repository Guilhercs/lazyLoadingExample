import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FeedComponent } from './pages/feed/feed.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent,
  // },
  // {
  //   path: 'feed',
  //   component: FeedComponent,
  // },
  // {
  //   path: 'user',
  //   component: UserComponent,
  // },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'feed',
    loadComponent: () =>
      import('./pages/feed/feed.component').then((c) => c.FeedComponent),
  },
  {
    path: 'user',
    loadComponent: () =>
      import('./pages/user/user.component').then((c) => c.UserComponent),
  },
];
