import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {FormComponent} from './form.component';
import {InnerComponent} from './components/inner.component'
import {FormRoutingModule} from './form-routing.module'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FormRoutingModule
    ],
    declarations: [
        FormComponent,
        InnerComponent
    ]
})
export class FormModule { }
