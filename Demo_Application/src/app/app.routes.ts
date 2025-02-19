import { Routes } from '@angular/router';
import { EmployessComponent } from './Components/employess/employess.component';
import { EmployessListComponent } from './Components/employess-list/employess-list.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { StructuralDriectivesComponent } from './Components/structural-driectives/structural-driectives.component';
import { AtrributeDriectiveComponent } from './Components/atrribute-driective/atrribute-driective.component';

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
    }
];
