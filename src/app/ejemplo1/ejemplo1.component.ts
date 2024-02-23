import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserModel } from './user.model';

@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.scss'
})
export class Ejemplo1Component {
  submit(user: UserModel):void {
    console.log(user);
    user.password = '*';
  }
}
