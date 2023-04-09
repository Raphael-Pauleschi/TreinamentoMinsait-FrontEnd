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

  formatLabelName(inputName: string): string {
    // Transforma camelCase em palavras separadas por espaço
    let labelName = inputName.replace(/([a-z])([A-Z])/g, '$1 $2');
    // Verifica se a palavra tem menos de três letras e a transforma em maiúsculas
    labelName = labelName.replace(/\b\w{1,3}\b/g, (word) => word.toUpperCase());
    // Transforma a primeira letra em maiúscula
    labelName = labelName.charAt(0).toUpperCase() + labelName.slice(1);
    return labelName;
  }

}
