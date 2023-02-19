import { Component, Output, EventEmitter, Input} from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
    selector: "alert-input",
    template:`<ion-button [color]="buttonColor" (click)='presentInfoAlert()'>{{buttonText}}</ion-button>`
  })
  export class AlertInput {
    @Output() onOkClick = new EventEmitter();
    @Output() onCancelClick = new EventEmitter();

    @Input() buttonText;
    @Input() buttonColor;
    @Input() headerText;
    @Input() messageText;
    @Input() cssClassText;
    @Input() okText;
    @Input() cancelText;
    @Input() type;
    @Input() placeholder?:string;
    @Input() item:any;


    constructor(private alertCtrl: AlertController) {}

    async presentInfoAlert(){
        const alert = await this.alertCtrl.create({
          header: this.headerText,
          cssClass:this.cssClassText,
          buttons:[
            {
              text:this.okText,
              handler: ()=>{
                this.onOkClick.emit(this.item)
              }
            }
          ],
          inputs: [
            {
              type:this.type,
              placeholder: this.placeholder,
            },
          ]
        });
    
        await alert.present();
        
      }

  }