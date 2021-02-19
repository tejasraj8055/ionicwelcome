import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from "../welcome/welcome";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  passwordType : string = 'password';
  passwordShown : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    this.navCtrl.push(WelcomePage);
  }

  togglePassword(){
    if (this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password'
    }else{
      this.passwordShown = true;
      this.passwordType = 'text'}

  }

}
