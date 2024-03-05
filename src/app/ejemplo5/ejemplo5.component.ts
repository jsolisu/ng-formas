import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo5',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ejemplo5.component.html',
  styleUrl: './ejemplo5.component.scss'
})
export class Ejemplo5Component {
  userForm: FormGroup<{
    user: FormControl<string | null>;
    nombre: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      user: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(32)]],
      nombre: '',
      password: fb.control('', Validators.required)
    });
  }

  submit(): void {
    console.log(this.userForm.value);
    console.log(this.userForm.controls.user.errors);
    this.userForm.patchValue({ password: '*' });
  }
}