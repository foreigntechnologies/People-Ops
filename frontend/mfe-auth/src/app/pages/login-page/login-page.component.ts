import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';
import { UserType } from '../../models/auth.model';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  isCandidate = true;
  isLoading = false;
  errorMessage = '';

  readonly loginForm;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly translate: TranslateService,
    private readonly router: Router
  ) {
    this.loginForm = this.formBuilder.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userType: ['candidate' as UserType, [Validators.required]]
    });
  }

  toggleType(type: 'candidate' | 'company') {
    this.isCandidate = type === 'candidate';
    this.loginForm.patchValue({ userType: type });
    this.errorMessage = '';
  }

  submitLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login(this.loginForm.getRawValue()).subscribe({
      next: (response) => {
        localStorage.setItem('peopleops.token', response.token);
        localStorage.setItem('peopleops.user', JSON.stringify(response));
        const redirectUrl = response.userType === 'company' ? '/dashboard' : '/jobs';
        void this.router.navigateByUrl(redirectUrl);
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error?.error?.message ?? this.translate.instant('AUTH.MESSAGES.LOGIN_FAILED');
        this.isLoading = false;
      }
    });
  }
}
