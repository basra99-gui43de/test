import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the EmployeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {
myEmployees:any;
sr=false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public crudProvider:CrudProvider,
    public loadingCtrl: LoadingController,
    private callNumber: CallNumber
    
    ) {
      
 }

 ionViewDidLoad() {
  this.crudProvider.getEmployees().then((data) => {
   
    this.myEmployees = data["data"];
    console.log( this.myEmployees);
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

ser_Input(){
  this.sr=!this.sr;
  }

  back(){
    this.navCtrl.pop();
  }
  call(number){
    console.log(number)
    this.callNumber.callNumber(number, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }
}
