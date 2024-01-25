import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/authentication/auth.effects';
import { DashboardEffects } from './store/dashboard/dashboard.effects';
import { ActivatedRouteSnapshot } from '@angular/router';
import { HttpLink } from 'apollo-angular/http';
import { authInterceptor } from './interceptor/auth.interceptor';
import { onError } from '@apollo/client/link/error';
import { ApolloLink, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { metaReducers } from './store/metareducer/metareducer.reducer';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducer,{
      runtimeChecks:{
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false,
        strictActionWithinNgZone: false,
        strictActionTypeUniqueness: false,
      },
      metaReducers:metaReducers

    }),
    EffectsModule.forRoot([AuthEffects, DashboardEffects]),
    ApolloModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide:APOLLO_OPTIONS,
      useFactory(httpLink:HttpLink){
        return {
          cache: new InMemoryCache(),
          defaultOptions:{
            watchQuery: {
              fetchPolicy: 'no-cache',
              errorPolicy: 'ignore'
            },
            query: {
              fetchPolicy: 'no-cache',
              errorPolicy: 'ignore'
            }
          },
          link:httpLink.create({
            uri:'http://localhost:8000/graphql'
          }),


        }
      },
      deps:[HttpLink]
    },
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
})
export class AppModule { }
