import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InfoAlert} from './alerts/info-alert';
import { InfoAlertCancel } from './alerts/info-alert-cancel';
import { AlertInput } from './alerts/info-alert-input';
import { InfoLoading } from './loading/info-loading';
import { DefaultToast } from './toast/icon-toast';


@NgModule({
    imports:[
        CommonModule,
        IonicModule,
    ],
    declarations:[
        InfoAlert,
        InfoAlertCancel,
        AlertInput,
        InfoLoading,
        DefaultToast
    ],
    exports:[
        InfoAlert,
        InfoAlertCancel,
        AlertInput,
        InfoLoading,
        DefaultToast
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentsModule{}