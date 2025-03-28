import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Constant } from '../../Constant/constant';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  validationMessages:any = Constant.VALIDATION_MESSAGES;
  studentObj:any = {
    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zipCode:'',
    isAcceptTerms:false,
  }

  formValue:any;

  onSubmit()
  {
    debugger;
  this.formValue = this.studentObj;
  }

}
