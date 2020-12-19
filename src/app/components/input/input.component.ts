import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormData } from "../../../shared/interface/form.data";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() formData: FormData[];
  @Input() buttonText: any;
  @Output() inputData = new EventEmitter();
  form: FormGroup;
  isSelected: any;
  submitted: boolean;

  constructor() { }

  ngOnInit() {
    const formGroup = {};
    //  method for generate dynamic form
    this.formData.forEach(formControl => {
      formGroup[formControl?.controlName] = new FormControl("", Validators.required);
    });
    this.form = new FormGroup(formGroup);
  }

  // method to highlight selected value in select option
  onSelect(obj) {
    obj.selected = true;
  }

  // method for submit 
  submitForm() {
    this.submitted = true;
    console.log("this is", this.form);
    if (this.form.valid) {
      this.inputData.emit(this.form);
    } else {
      return null;
    }
  }

}
