import { Routes } from '@angular/router';
import { EmployessComponent } from './Components/employess/employess.component';
import { EmployessListComponent } from './Components/employess-list/employess-list.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { StructuralDriectivesComponent } from './Components/structural-driectives/structural-driectives.component';
import { AtrributeDriectiveComponent } from './Components/atrribute-driective/atrribute-driective.component';
import { IfelseComponent } from './Components/Control Flow Statments/ifelse/ifelse.component';
import { ForLoopComponent } from './Components/Control Flow Statments/for-loop/for-loop.component';
import { PipeComponent } from './Components/pipe/pipe.component';
import { TemplateFormComponent } from './Components/Forms/template-form/template-form.component';
import { ReactiveFormComponent } from './Components/Forms/reactive-form/reactive-form.component';
import { GetApiComponent } from './Components/API Integration/get-api/get-api.component';
import { PostApiComponent } from './Components/API Integration/post-api/post-api.component';
import { LifecycleEventComponent } from './Components/lifecycle-event/lifecycle-event.component';
import { NgTemplateComponent } from './Components/ng-template/ng-template.component';
import { NgContainerComponent } from './Components/ng-container/ng-container.component';
import { ViewChildComponent } from './Components/view-child/view-child.component';

export const routes: Routes = [
    {
        path:'employess',
        component:EmployessComponent,
    },
    {
        path:'employess-list',
        component:EmployessListComponent,
    },
    {
        path:'data-binding',
        component:DataBindingComponent,
    },
    {
        path:'struture-driectives',
        component:StructuralDriectivesComponent,
    },
    {
        path:'attribute-driectives',
        component:AtrributeDriectiveComponent,
    },
    {
        path:'ifelse-control-flow',
        component:IfelseComponent,
    },
    {
        path:'for-loop-control-flow',
        component:ForLoopComponent,
    },
    {
        path:'pipes',
        component:PipeComponent,
    },
    {
        path:'template-form',
        component:TemplateFormComponent,
    },
    {
        path:'reactive-form',
        component:ReactiveFormComponent,
    },
    {
        path:'get-api',
        component:GetApiComponent,
    },
    {
        path:'post-api',
        component:PostApiComponent,
    },
    {
        path:'lifecycle-event',
        component:LifecycleEventComponent,
    },
    {
        path:'ng-template',
        component:NgTemplateComponent,
    },
    {
        path:'ng-conatiner',
        component:NgContainerComponent,
    },
    {
        path:'view-child',
        component:ViewChildComponent,
    }
];
