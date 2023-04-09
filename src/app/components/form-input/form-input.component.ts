import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {
  @Input() inputName: string = "";
  @Input() labelName: string = "";
  @Input() inputType: string = "text";
  @Input() isReadOnly: boolean = false;
  @Input() parentFormGroup!: FormGroup;
  @Input() selectOptions: String[] = [];
  
  constructor(){}

  isSelect(){
    return this.selectOptions.length > 0;
  }


}
