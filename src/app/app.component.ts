import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['/ej1']" routerLinkActive="router-link-active">Ejemplo1</a> 
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Pruebas de Formas';
}
