import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-ejemplo7',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ejemplo7.component.html',
  styleUrl: './ejemplo7.component.scss'
})
export class Ejemplo7Component {
  userForm: FormGroup<{
    user: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  passwordLength: number = 0;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.userForm.controls.password.valueChanges
      .pipe(
        // recalcular valor cuando el usuario deja de escribir por 500ms.
        debounceTime(500),
        // cambiar el valor unicamente si es diferente que el ultimo recibido.
        distinctUntilChanged()
      )
      .subscribe(value => (this.passwordLength = value ? value.length : 0));
  }

  submit(): void {
    this.userForm.patchValue({ password: '*' });
  }
}
