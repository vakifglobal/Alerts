import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "toast-cancel",
  template: `<ion-button [color]="buttonColor" (click)="presentToast()">{{
    buttonText
  }}</ion-button>`,
})
export class ToastCancel {
  @Output() onOkClick = new EventEmitter();
  @Output() onCancelClick = new EventEmitter();

  @Input() buttonText;
  @Input() buttonColor;
  @Input() messageText;
  @Input() cssClassText;
  @Input() toastPosition;
  @Input() toastHeader;
  @Input() okText;
  @Input() cancelText;
  @Input() icon;
  @Input() item:any;

  constructor(private toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.messageText,
      duration: 3000,
      keyboardClose: true,
      position: this.toastPosition,
      translucent: true,
      animated: true,
      icon: this.icon,
      buttons: [
        {
          text: this.okText,
          role: "info",
          handler: () => {
            this.onOkClick.emit(this.item);
          },
        },
        {
          text: this.cancelText,
          role: "cancel",
          handler: () => {
            this.onCancelClick.emit(this.item);
          },
        },
      ],
    });
    await toast.present();
  }
}
