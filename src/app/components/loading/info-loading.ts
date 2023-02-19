import { Component, Input } from "@angular/core";

import { LoadingController, SpinnerTypes } from "@ionic/angular";

@Component({
  selector: "info-loading",
  template: `<ion-button [color]="buttonColor" (click)="showLoading()">{{
    buttonText
  }}</ion-button>`,
})
export class InfoLoading {
  @Input() buttonText;
  @Input() buttonColor;
  @Input() messageText;
  @Input() cssClassText;
  @Input() spinner?: SpinnerTypes | null;
//   @Input() backdropDismiss?: boolean;
//   @Input() translucent?: boolean;
//   @Input() duration?: number;
//   @Input() keyboardClose?: boolean;

  constructor(private loadingCtrl: LoadingController) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: this.messageText,
      cssClass: this.cssClassText,
      spinner: this.spinner,

      duration: 2000,
      keyboardClose: true,
      translucent: true,
      backdropDismiss: true,
    });

    loading.present();
  }
}
