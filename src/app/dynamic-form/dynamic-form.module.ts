import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './elements/input.component';
import { SelectComponent } from './elements/select.component';
import { FormControlPipe } from './form-control.pipe';

@NgModule({
  declarations: [
    FormBuilderComponent,
    InputComponent,
    SelectComponent,
    FormControlPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormBuilderComponent
  ]
})
export class DynamicFormModule { }
