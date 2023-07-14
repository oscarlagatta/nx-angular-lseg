import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appRoutes } from './app.routes';
import { ClassHierarchyModule } from './class-hierarchy/class-hierarchy.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(ClassHierarchyModule),
    provideEffects(),
    isDevMode() ? provideStoreDevtools() : [],
    provideStore(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
  ],
};
