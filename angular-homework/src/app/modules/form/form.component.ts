import {Component, ViewChild} from '@angular/core'
import {NgForm} from '@angular/forms'

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
})
export class FormComponent {
    public data = null
    @ViewChild('form', {static: true}) form: NgForm

    public submit() {
        if (this.form.invalid) {
            return
        }
        this.data = Object.assign({}, this.form.value)
    }
}
