import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtrributeDriectiveComponent } from './Components/atrribute-driective/atrribute-driective.component';
// import { EmployessComponent } from './Components/employess/employess.component';
// import { EmployessListComponent } from './Components/employess-list/employess-list.component';
// import { DataBindingComponent } from './Components/data-binding/data-binding.component';
// import { StructuralDriectivesComponent } from './Components/structural-driectives/structural-driectives.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AtrributeDriectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo_Application';
}
