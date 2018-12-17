import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController  } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';
// import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the JobListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-list',
  templateUrl: 'job-list.html',
})
export class JobListPage {
myJobs:any;
sr=false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public crudProvider:CrudProvider , 
    public loadingCtrl: LoadingController
    ) {
      
 }

 presentLoading() {
  const loader = this.loadingCtrl.create({
    content: "يرجى الانتظار",
    duration: 3000
  });
  loader.present();
}
 ionViewDidLoad() {
  this.crudProvider.getJobs().then((data) => {
   
    this.myJobs = data["data"];
    console.log( this.myJobs);
  });
  this.presentLoading();
}
  

ser_Input(){
  this.sr=!this.sr;
  }

  back(){
    this.navCtrl.pop();
  }
}
