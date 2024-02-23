import { Routes } from '@angular/router';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';

export const routes: Routes = [
    { path: 'ej1', component: Ejemplo1Component },
    { path: 'ej2', component: Ejemplo2Component }
];
