import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-[#1E028C] p-4">
      <div class="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div class="text-center mb-8">
          <h1 class="text-2xl font-bold text-[#1E028C]">Connexion</h1>
          <p class="text-gray-600 mt-2">Bienvenue ! Connectez-vous à votre compte</p>
        </div>

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              formControlName="email"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#1E028C] focus:border-transparent"
              [ngClass]="{'border-red-500': isFieldInvalid('email')}"
            />
            <div *ngIf="isFieldInvalid('email')" class="text-red-500 text-sm mt-1">
              Email invalide
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              formControlName="password"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#1E028C] focus:border-transparent"
              [ngClass]="{'border-red-500': isFieldInvalid('password')}"
            />
            <div *ngIf="isFieldInvalid('password')" class="text-red-500 text-sm mt-1">
              Mot de passe requis
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                type="checkbox"
                id="remember"
                class="h-4 w-4 text-[#1E028C] focus:ring-[#1E028C] border-gray-300 rounded"
              />
              <label for="remember" class="ml-2 block text-sm text-gray-700">
                Se souvenir de moi
              </label>
            </div>
            <a href="#" class="text-sm text-[#1E028C] hover:underline">
              Mot de passe oublié ?
            </a>
          </div>

          <button
            type="submit"
            class="w-full bg-[#1E028C] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition duration-200"
          >
            Se connecter
          </button>
        </form>

        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Pas encore de compte ?
            <a routerLink="/signup" class="text-[#1E028C] hover:underline">
              S'inscrire
            </a>
          </p>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Implement login logic here
    } else {
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  



}