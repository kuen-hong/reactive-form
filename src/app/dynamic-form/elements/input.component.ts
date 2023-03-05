import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {

  @Input()
  field: any = {};

  @Input()
  control!: FormControl;

  get isValid(): boolean {
    return this.control.valid;
  }

  get isDirty(): boolean {
    return this.control.dirty;
  }
}
