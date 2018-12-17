import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';
import { AldalelInfoPage } from '../aldalel-info/aldalel-info';
import { CrudProvider } from '../../providers/crud/crud';
import { Observable } from 'rxjs/Observable';
// import {HttpClient} from '@angular/common/http';
/**
 * Generated class for the AldalelListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aldalel-list',
  templateUrl: 'aldalel-list.html',
})
export class AldalelListPage {
myCompany:any;
type:any
// data:Observable<any[]>;
sr=false;
  constructor(
    // public http:HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams,
    public crudProvider:CrudProvider,
    public loadingCtrl: LoadingController
    ) {
      this.type = this.navParams.get('id');
 }

 ionViewDidLoad() {
  this.crudProvider.getCompanyByType(this.type).then((data) => {
    this.myCompany = data["data"];
    console.log( this.myCompany);
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

// doRefresh(refresher) {
// this.myCompany;
 
//     refresher.complete();
 
// }

// doInfinite(infiniteScroll) {
//   this.crudProvider.getCompanies().then((data) => {
   
//     this.myCompany =this.myCompany.concat(data["data"]);
//     console.log( this.myCompany);
//     infiniteScroll.complete();
//   });
// }





  info(id, company_name){
    this.navCtrl.push(AldalelInfoPage, {
      id:id,
      company_name: company_name
    });
    console.log('detailsId',id);

  }

  ser_Input(){
    this.sr=!this.sr;
    }

    back(){
      this.navCtrl.pop();
    }
}
