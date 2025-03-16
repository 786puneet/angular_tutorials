import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
 firstName = signal('Angular 18');
}
