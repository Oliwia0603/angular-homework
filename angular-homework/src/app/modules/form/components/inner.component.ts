import { Component, OnInit,ViewChild,SkipSelf,Optional } from '@angular/core';

import {ControlContainer, NgForm} from '@angular/forms'

@Component({
    selector: 'app-form-inner',
    templateUrl: './inner.component.html',
    viewProviders: [{provide: ControlContainer,useExisting: NgForm}]
})
export class InnerComponent {
    parent:any
    @ViewChild(NgForm,{static:true}) form!:any
    constructor(parent: ControlContainer) {
        this.parent=parent as NgForm
       }
  
    ngOnInit() {
      console.log(this.parent.submitted)
    }
}
