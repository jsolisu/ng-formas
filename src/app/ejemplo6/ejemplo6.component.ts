import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl, FormBuilder, FormControl, FormGroup,
  ReactiveFormsModule, ValidationErrors, Validators
} from '@angular/forms';

@Component({
  selector: 'app-ejemplo6',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ejemplo6.component.html',
  styleUrl: './ejemplo6.component.scss'
})
export class Ejemplo6Component {
  userForm: FormGroup<{
    user: FormControl<string | null>;
    passwordGroup: FormGroup<{
      password: FormControl<string | null>;
      passwordConfirm: FormControl<string | null>;
    }>
  }>;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      user: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(32)]],
      passwordGroup: fb.group(
        {
          password: fb.control('', Validators.required),
          passwordConfirm: fb.control('', Validators.required),
        },
        { validators: Ejemplo6Component.passwordIgual })
    });
  }

  static passwordIgual(group: AbstractControl): ValidationErrors | null {
    return group.value.password === group.value.passwordConfirm ? null : { errorIgualdad: true };
  }

  submit(): void {
  }
}