import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserModel } from './user.model';

@Component({
    selector: 'app-ejemplo2',
    imports: [CommonModule, FormsModule],
    templateUrl: './ejemplo2.component.html',
    styleUrl: './ejemplo2.component.scss'
})
export class Ejemplo2Component {
  user: UserModel = {
    user: '',
    password: ''
  }

  submit(): void {
    console.log(this.user);
    this.user.password = '*';
  }
}
