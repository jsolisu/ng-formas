import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'app-ejemplo3',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './ejemplo3.component.html',
    styleUrl: './ejemplo3.component.scss'
})
export class Ejemplo3Component {
  userForm: FormGroup<{
    user: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;
  
  // userForm: any;
  // userForm: UntypedFormGroup;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      user: '', // Equivale a fb.control(''), new FormControl('') o ['']
      password: ''
    });
  }

  submit(): void {
    console.log(this.userForm.value);
    this.userForm.value.password='*'; // esto no funciona

    // Esto requiere que userForm sea de tipo FormGroup<T> o el tipo any.
    // this.userForm.controls.password.setValue('*');

    // Esto funciona cuando userForm tiene cualquier tipo.
    this.userForm.patchValue({password: '*'});
  }
}
