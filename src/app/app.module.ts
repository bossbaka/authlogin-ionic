import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';

import { Facebook } from "@ionic-native/facebook";

export const firebaseConfig = {
  apiKey: "AIzaSyDQr5tY203ovuIZUJDfrlTEhLC4xTF57UA",
  authDomain: "boss-202302.firebaseapp.com",
  databaseURL: "https://boss-202302.firebaseio.com",
  projectId: "boss-202302",
  storageBucket: "boss-202302.appspot.com",
  messagingSenderId: "814423530711"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    //AuthProvider,
    Facebook
  ]
})
export class AppModule {}
