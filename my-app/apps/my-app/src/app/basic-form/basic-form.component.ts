import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  standalone: true,
  imports: [BasicFormComponent, CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'my-app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent {
  mainFormGroup: FormGroup;
  constructor(
    /**
     * - in order to use FormBuilder, need to import the ReactiveFormsModule & FormsModule
     */
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // create and init the form
    this.initForm();
  }

  initForm() {
    this.mainFormGroup = this.fb.group({
      name: [''],
      age: 0,
    });
  }
}
