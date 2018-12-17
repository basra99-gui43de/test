import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild , ElementRef } from '@angular/core'
import { LNodeFlags } from '@angular/core/src/render3/interfaces';
/**
 * Generated class for the AldalelMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google:any

@IonicPage()
@Component({
  selector: 'page-aldalel-map',
  templateUrl: 'aldalel-map.html',
})
export class AldalelMapPage {
  @ViewChild('map') mapElement:ElementRef
  map:any
  pos = ""
  lat
  lng
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pos = this.navParams.get("data");
    console.log(this.pos)
    this.lat = this.pos.substring(0, 9);
    console.log("lat :" + this.lat)
    this.lng = this.pos.substring(11, 20);
    console.log("lat :" + this.lng)
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AldalelMapPage');
    this.loadMap();
  }
  loadMap(){

  
    let LatLng = new google.maps.LatLng(this.lat , this.lng);
    let mapOptions = {
      center:LatLng,
      zoom: 14,
  mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
  
  
  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  let marker = new google.maps.Marker(
      
    {
    position : new google.maps.LatLng(this.lat , this.lng),
    map: this.map,
    contect : "this"
  });
  marker.addListener('click', function() {
    this.map.setZoom(17);
    this.map.setCenter(marker.getPosition());
  });
  }
  }


