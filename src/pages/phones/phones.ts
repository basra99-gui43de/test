import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController  } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';

/**
 * Generated class for the PhonesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phones',
  templateUrl: 'phones.html',
})
export class PhonesPage {
  myphone:any
  sr=false;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public crudProvider:CrudProvider,
     public loadingCtrl: LoadingController
     ) {
       
  }

  ionViewDidLoad() {
    this.crudProvider.getPhones().then((data) => {
     
      this.myphone = data["data"] 
      console.log( this.myphone)
    })
    this.presentLoading();
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "يرجى الانتظار",
      duration: 3000
    });
    loader.present();
  }






  ser_Input(){
    this.sr=!this.sr;
    }

    back(){
      this.navCtrl.pop();
    }
}
