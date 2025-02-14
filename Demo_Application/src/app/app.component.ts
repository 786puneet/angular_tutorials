import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployessComponent } from './Components/employess/employess.component';
import { EmployessListComponent } from './Components/employess-list/employess-list.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo_Application';
}
