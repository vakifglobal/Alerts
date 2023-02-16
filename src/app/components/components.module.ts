import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InfoAlert} from './alerts/info-alert';
import { InfoAlertCancel } from './alerts/info-alert-cancel';


@NgModule({
    imports:[
        CommonModule,
        IonicModule,
    ],
    declarations:[
        InfoAlert,
        InfoAlertCancel
    ],
    exports:[
        InfoAlert,
        InfoAlertCancel
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentsModule{}