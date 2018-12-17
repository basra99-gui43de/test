import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the CarrerInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrer-info',
  templateUrl: 'carrer-info.html',
})
export class CarrerInfoPage {
  myCarrerInfo:any;
  id:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public crudProvider:CrudProvider , 
    public loadingCtrl: LoadingController,
    private callNumber: CallNumber
    ) {
      this.id = this.navParams.get('id');
      console.log('recieving id .....:', this.id);
      
 }

  ionViewDidLoad() {
    this.crudProvider.getCarrerInfo().then((data) => {
     
      this.myCarrerInfo = data["data"];
      console.log( this.myCarrerInfo);
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
    call(number){
     console.log(number)
      this.callNumber.callNumber(number, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
    }

}
