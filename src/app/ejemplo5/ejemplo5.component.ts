import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl, FormBuilder, FormControl, FormGroup,
  ReactiveFormsModule, ValidationErrors, Validators
} from '@angular/forms';

@Component({
    selector: 'app-ejemplo5',
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
      nombre: ['', Ejemplo5Component.usuarioCompleto],
      password: fb.control('', Validators.required)
    });
  }

  // static = Compartido entre instancias de la clase, es decir, permite utilizar
  // Ejemplo5Component.usuarioCompleto sin necesidad de instanciar la clase.
  //
  // El metodo retorna null si no hay error, en caso contrario un objeto que describe el error
  static usuarioCompleto(control: AbstractControl): ValidationErrors | null {
    // contar dos palabras donde cada una tenga al menos 1 caracter
    return control.value.split(' ').filter((p: string) => p.trim().length > 0)
      .length < 2 ? { incompleto: true } : null
  }

  submit(): void {
    console.log(this.userForm.value);
    console.log(this.userForm.controls.user.errors);
    this.userForm.patchValue({ password: '*' });
  }
}