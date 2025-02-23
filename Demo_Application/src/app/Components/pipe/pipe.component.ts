import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { NaPipe } from '../Custom Pipe/na.pipe';
@Component({
  selector: 'app-pipe',
  imports: [NaPipe,AsyncPipe,JsonPipe,DatePipe,LowerCasePipe,UpperCasePipe,TitleCasePipe,],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  demotext:string='Puneet';
  date:Date= new Date();
  CurrentTime:Observable<Date> = new Observable<Date>;
  student:any={
    name:'puneet',
    qualification:'bba',
    status:'active',


  }
  test:any='';
constructor(){
  this.CurrentTime= interval(1000).pipe(map(()=> new Date()));
}
}
