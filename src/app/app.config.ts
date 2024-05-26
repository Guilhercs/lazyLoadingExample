import { ApplicationConfig } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    //provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAnimationsAsync(),
  ],
};

// @NgModule({
//   imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
//   exports: [RouterModule]
// })
