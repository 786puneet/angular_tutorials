import { Component, HostListener } from '@angular/core';
import {  RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , RouterLink  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo_Application';

@HostListener('onScroll')
  onScroll()
  {

  }
}
