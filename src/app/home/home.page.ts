import { Component,Input, EventEmitter, OnChanges } from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnChanges {

  deneme = {
    id:1,
    title:"Rukiye",
    subTitle:"Vakıf Global"
  }

  constructor(
    public alertsrv:AlertService
  ) {}

  ngOnChanges(changes: { [propKey: string]: any }) {
  }

  onCancelClick(params): void {
    console.log("onOkClick",params)
   alert(1)
  }

  onOkClick(params): void {
    console.log("onOkClick",params)
  }

}
