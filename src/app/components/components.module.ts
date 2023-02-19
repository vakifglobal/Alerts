import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InfoAlert} from './alerts/info-alert';
import { InfoAlertCancel } from './alerts/info-alert-cancel';
import { AlertInput } from './alerts/info-alert-input';
import { InfoLoading } from './loading/info-loading';
import { ToastIcon } from './toast/toast-icon';
import { ToastCancel } from './toast/toast-cancel';


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
        ToastIcon,
        ToastCancel
    ],
    exports:[
        InfoAlert,
        InfoAlertCancel,
        AlertInput,
        InfoLoading,
        ToastIcon,
        ToastCancel
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentsModule{}