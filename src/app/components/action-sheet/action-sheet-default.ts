import { Component, Input } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "default-action-sheet",
  template: `<ion-button [color]="buttonColor" (click)="presentActionSheet()">{{
    buttonText
  }}</ion-button>`,
})
export class DefaultActionSheet {
  @Input() buttonText;
  @Input() buttonColor;
  @Input() sheetHeader;
  @Input() sheetSubheader;
  @Input() deleteText;
  @Input() cancelText;
  @Input() okText;

  constructor(private actionSheetCtrl: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: this.sheetHeader,
      subHeader: this.sheetSubheader,
      keyboardClose:true,
      backdropDismiss: true,
      translucent: true,
      animated: true,
      buttons: [
        {
          text: this.deleteText,
          role: "destructive",
          data: {
            action: "delete",
          },
        },
        {
          text: this.okText,
          role:"selected",
          data: {
            action: "okay",
          },
        },
        {
          text: this.cancelText,
          role: "cancel",
          data: {
            action: "cancel",
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
