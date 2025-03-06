import { Component , OnInit , DoCheck , AfterViewInit , AfterViewChecked, AfterContentInit ,AfterContentChecked , OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  imports: [],
  templateUrl: './lifecycle-event.component.html',
  styleUrl: './lifecycle-event.component.css'
})
export class LifecycleEventComponent implements OnInit, DoCheck ,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy,OnChanges{
firstname:string;

constructor()
{
console.log("hello this is constructor");
this.firstname='';
}

ngOnInit(): void {
  console.log('this is ng on init');
}

ngDoCheck():void
{
console.log("this is ngDoCheck");
}

ngAfterViewInit(): void {
  console.log("afterviewinit");
}
ngAfterViewChecked(): void {
  console.log("AfterviewChecked");
}
ngAfterContentInit(): void {
  console.log("AfterContentInit");
}

ngAfterContentChecked(): void {
  console.log("aftercontentchecked");
}

ngOnDestroy(): void {
  console.log("on destroy");
}
ngOnChanges(changes: SimpleChanges): void {
  console.log('onchanges init');
}
}
