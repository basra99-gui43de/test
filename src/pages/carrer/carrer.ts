import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';
import { CarrerInfoPage } from './../carrer-info/carrer-info';
import { CrudProvider } from '../../providers/crud/crud';

/**
 * Generated class for the CarrerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrer',
  templateUrl: 'carrer.html',
})
export class CarrerPage {
myCarrer:any;
sr=false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public crudProvider:CrudProvider , 
    public loadingCtrl: LoadingController
    
    ) {
      
 }
  ionViewDidLoad() {
    this.crudProvider.getCarrer().then((data) => {
     
      this.myCarrer = data["data"];
      console.log( this.myCarrer);
    });

    this.presentLoading();
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "يرجى الانتظار",
      duration: 3000
    });
    loader.present();
  }
  

  info(id){
    this.navCtrl.push(CarrerInfoPage, {
      id:id
    });
    console.log('carrer details',id);
    
  }
  ser_Input(){
    this.sr=!this.sr;
    }

    back(){
      this.navCtrl.pop();
    }
}
