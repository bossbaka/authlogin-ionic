import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";

import { Observable } from "rxjs/Observable";
interface Items { money: any };
interface Items { admin: any };

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any;
  money: any;
  admin: any;
  userCollection: AngularFirestoreCollection<Items>; //Firestore collection
  items: Observable<Items[]>; // read collection


  constructor(    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AngularFireAuth,
    //private platform: Platform,
    private afs: AngularFirestore
) {
  this.auth.authState.subscribe(user => {
    console.log(user);
    if (!user) {
      this.user = null;
    }
    else {
      this.user = user;
      this.userCollection = this.afs.collection("user", ref =>
        ref.where("email", "==", user.email)
      ); //ref()
      this.items = this.userCollection.valueChanges();
      
      this.items.forEach(element => {
        console.log(element);
        if (element[0] != null) {
          this.money = element[0].money;
        }
        else {
          this.money = null;
        }
        console.log(this.money);
      });

      this.items.forEach(element => {
        console.log(element);
        if (element[0] != null) {
          this.admin = element[0].admin;
        }
        else {
          this.admin = null;
        }
        console.log(this.admin);
      });

    }
  });
}


  // signInWithFacebook() {
  //   return this.auth.auth
  //     .signInWithPopup(new firebase.auth.FacebookAuthProvider())
  //     .then(res => console.log(res));
  // }

  signOut() {
    this.auth.auth.signOut();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  signInWithGoogle() {
    return this.auth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => console.log(res));
  }

}
