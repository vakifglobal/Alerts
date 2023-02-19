import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "icon-toast",
  template: `<ion-button [color]="buttonColor" (click)='presentToast()'>{{ buttonText }}</ion-button>`,
})
export class DefaultToast {

  @Input() buttonText;
  @Input() buttonColor;
  @Input() messageText;
  @Input() cssClassText;
  @Input() toastPosition;
  @Input() toastHeader;
  @Input() animated;
  @Input() icon;

  constructor(private toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.messageText,
      header:this.toastHeader,
      duration: 1500,
      keyboardClose:true,
      position: this.toastPosition,
      translucent: true,
      animated:true,
      icon:this.icon
    });

    await toast.present();
  }
}
