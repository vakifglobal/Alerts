import { Component, Output, EventEmitter, Input, OnChanges } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
    selector: "info-alert",
    template:`<ion-button [color]="buttonColor" (click)='presentInfoAlert()'>{{buttonText}}</ion-button>`
  })
  export class InfoAlert {
    @Output() onOkClick = new EventEmitter();
    @Output() onCancelClick = new EventEmitter();

    @Input() buttonText;
    @Input() buttonColor;
    @Input() headerText;
    @Input() messageText;
    @Input() cssClassText;
    @Input() okText;
    @Input() item:any;


    constructor(private alertCtrl: AlertController) {}

    async presentInfoAlert(){
        const alert = await this.alertCtrl.create({
          header: this.headerText,
          message:this.messageText,
          cssClass:this.cssClassText,
          buttons:[
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