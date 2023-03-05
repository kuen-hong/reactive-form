import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
})
export class FormBuilderComponent implements OnInit {
  
  form!: FormGroup;

  @Input()
  model: any = {};

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.form = new FormGroup(formGroupFields);
  }

  getFormControlsFields() {
    const formGroupFields: any = {};
    for (const field of this.model) {
      if (field.required) {
        formGroupFields[field.name] = new FormControl(field.value, [Validators.required]);
      } else {
        formGroupFields[field.name] = new FormControl(field.value);
      }
    }
    return formGroupFields;
  }

  onSave() {
    console.log(this.form.value);
  }
}
