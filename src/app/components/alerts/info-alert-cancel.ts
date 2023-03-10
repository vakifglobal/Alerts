import { Component, Output, EventEmitter, Input} from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
    selector: "info-alert-cancel",
    template:`<ion-button [color]="buttonColor" (click)='presentInfoAlert()'>{{buttonText}}</ion-button>`
  })
  export class InfoAlertCancel {
    @Output() onOkClick = new EventEmitter();
    @Output() onCancelClick = new EventEmitter();

    @Input() buttonText;
    @Input() buttonColor;
    @Input() headerText;
    @Input() messageText;
    @Input() cssClassText;
    @Input() okText;
    @Input() cancelText;
    @Input() item:any;


    constructor(private alertCtrl: AlertController) {}

    async presentInfoAlert(){
        const alert = await this.alertCtrl.create({
          header: this.headerText,
          message:this.messageText,
          cssClass:this.cssClassText,
          buttons:[
            {
              text:this.cancelText,
              role:'cancel',
              handler:()=>{
                this.onCancelClick.emit(this.item)
              }
            },
            {
              text:this.okText,
              handler: ()=>{
                this.onOkClick.emit(this.item)
              }
            }
          ]
        });
    
        await alert.present();
        
      }

  }