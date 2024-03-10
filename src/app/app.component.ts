import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>{{title}}</h1>
    <ul>
      <li>
        <a [routerLink]="['/ej1']" 
           routerLinkActive="router-link-active">Ejemplo1 - Template-driven (one-way data-binding)</a>
      </li>
      <li>
        <a [routerLink]="['/ej2']" 
           routerLinkActive="router-link-active">Ejemplo2 - Template-driven (two-way data-binding)</a>
      </li>
      <li>
        <a [routerLink]="['/ej3']" 
           routerLinkActive="router-link-active">Ejemplo3 - Code-driven</a>
      </li>      
      <li>
        <a [routerLink]="['/ej4']" 
           routerLinkActive="router-link-active">Ejemplo4 - Validation</a>
      </li>  
      <li>
        <a [routerLink]="['/ej5']" 
           routerLinkActive="router-link-active">Ejemplo5 - Custom validator</a>
      </li>  
      <li>
        <a [routerLink]="['/ej6']" 
           routerLinkActive="router-link-active">Ejemplo6 - Grouping fields</a>
      </li>  
    </ul>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Angular - Ejemplos de Formas';
}
