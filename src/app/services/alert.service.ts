import { Injectable,Output, EventEmitter } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  @Output() onOkClick = new EventEmitter();
  @Output() onCancelClick = new EventEmitter();


  constructor(private alertCtrl:AlertController) { }

  async presentInfoAlert(headerText,messageText,cssClassText,okText,cancelText,item:any,event:Event){
    if (event) {
      event.stopPropagation();
    }

    const alert = await this.alertCtrl.create({
      header: headerText,
      message:messageText,
      cssClass:cssClassText,
      buttons:[
        {
          text:cancelText,
          role:'cancel',
          handler:()=>{
            this.onCancelClick.emit(item)
          }
        },
        {
          text:okText,
          handler: ()=>{
            this.onOkClick.emit(item)
          }
        }
      ]
    });

    await alert.present();

    
  }
}
