import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
studentObj:FormGroup= new FormGroup({
firstName: new FormControl("",[Validators.required,Validators.minLength(3)]),
lastName: new FormControl("",[Validators.required]),
userName: new FormControl("" ,[Validators.email]),
city: new FormControl(""),
state: new FormControl(""),
zipCode: new FormControl("")
 })

formValues:any;

onSubmit()
{
this.formValues = this.studentObj.value;
}
resetValues(){
  this.studentObj.reset();
}

}
