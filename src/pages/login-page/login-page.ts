import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Dropbox } from '../../providers/dropbox';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public dropbox: Dropbox) {

  }

  login() {

    this.dropbox.login().then((success) => {
      this.navCtrl.setRoot(HomePage);
    }, (err) => {
      console.log(err);
    });
    
  }

}