import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName:string='BBA';
  inputType='radio';
  className:string='bg-danger';
  placeholdertext:string | number = 'this is demo text';
  typeInput:string='checkbox';
  stateName:string='Mohali';
  favActorName=signal('Salmana Khan');
  showAlert(msg:string){
    alert(msg)
  }

  changeCourseName()
  {
    this.courseName='Angular 17 Learninng';
    this.favActorName.set('Amiar Khan');
  }

}
