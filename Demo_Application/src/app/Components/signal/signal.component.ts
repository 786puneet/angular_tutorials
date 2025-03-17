import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
 firstName = signal('Angular 18');
 rollNumber = signal<number>(33);
 newVar:string='HTML';
 cityName = signal(['Mumbai','Chandighar']);
 userData = signal(
  {
    name:'puneet',
    city:'Mohali'
  }
 )
 constructor()
 {
  setTimeout(() => {
    this.firstName.set('Dot Net');
    this.newVar = 'Javascript';
  }, 5000);
 }

 addCity(){
  this.cityName.set([...this.cityName(), "Mohali"])
 }

 changeUserCity(){
 this.userData.set({...this.userData(), city:'CHD.'})
 }
}
