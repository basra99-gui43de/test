import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController  } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';
import { AldalelMapPage } from '../aldalel-map/aldalel-map';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the AldalelInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aldalel-info',
  templateUrl: 'aldalel-info.html',
})
export class AldalelInfoPage {
myDetails=[];
company_id:any;
company_name:any;
ietmss:any
map_pos={}
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public crudProvider:CrudProvider ,
    public loadingCtrl: LoadingController,
    private callNumber: CallNumber
    ) {
      this.company_id = this.navParams.get('id');
      this.company_name = this.navParams.get('company_name');
 }

  ionViewDidLoad() {
    this.crudProvider.getCompanyDetails(this.company_id).then((data) => {
   
      this.ietmss = data["data"];
      this.myDetails.push(this.ietmss) ;
      console.log( this.myDetails);
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
  Map(){
      for (const value of  this.myDetails) {
      this.map_pos =value['map'] 

    }
    this.navCtrl.push(AldalelMapPage  ,  {data: this.map_pos});
  }


  call(number){
    // alert(number)
    this.callNumber.callNumber(number, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }
}
