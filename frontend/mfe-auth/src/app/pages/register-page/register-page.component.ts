import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';
import { UserType } from '../../models/auth.model';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  isCandidate = true;
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  readonly registerForm;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly translate: TranslateService
  ) {
    this.registerForm = this.formBuilder.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      userType: ['candidate' as UserType, [Validators.required]]
    });
  }

  toggleType(type: 'candidate' | 'company') {
    this.isCandidate = type === 'candidate';
    this.registerForm.patchValue({ userType: type });
    this.successMessage = '';
    this.errorMessage = '';
  }

  submitRegister() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const formValue = this.registerForm.getRawValue();
    if (formValue.password !== formValue.confirmPassword) {
      this.errorMessage = this.translate.instant('AUTH.ERRORS.PASSWORD_MISMATCH');
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.authService.register({
      name: formValue.name,
      email: formValue.email,
      password: formValue.password,
      userType: formValue.userType
    }).subscribe({
      next: () => {
        this.successMessage = this.translate.instant('AUTH.MESSAGES.REGISTER_SUCCESS');
        this.registerForm.patchValue({
          password: '',
          confirmPassword: ''
        });
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error?.error?.message ?? this.translate.instant('AUTH.MESSAGES.REGISTER_FAILED');
        this.isLoading = false;
      }
    });
  }
}
