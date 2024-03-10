import { Routes } from '@angular/router';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './ejemplo5/ejemplo5.component';
import { Ejemplo6Component } from './ejemplo6/ejemplo6.component';

export const routes: Routes = [
    { path: 'ej1', component: Ejemplo1Component },
    { path: 'ej2', component: Ejemplo2Component },
    { path: 'ej3', component: Ejemplo3Component },
    { path: 'ej4', component: Ejemplo4Component },
    { path: 'ej5', component: Ejemplo5Component },
    { path: 'ej6', component: Ejemplo6Component }
];
