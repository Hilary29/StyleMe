import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-[#1E028C] p-4">
      <div class="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div class="text-center mb-8">
          <h1 class="text-2xl font-bold text-[#1E028C]">Créer un compte</h1>
          <p class="text-gray-600 mt-2">Rejoignez-nous et commencez votre voyage</p>
        </div>

        <form [formGroup]="signupForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">
                Prénom
              </label>
              <input
                type="text"
                id="firstName"
                formControlName="firstName"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#1E028C] focus:border-transparent"
                [ngClass]="{'border-red-500': isFieldInvalid('firstName')}"
              />
              <div *ngIf="isFieldInvalid('firstName')" class="text-red-500 text-sm mt-1">
                Prénom requis
              </div>
            </div>

            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                formControlName="lastName"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#1E028C] focus:border-transparent"
                [ngClass]="{'border-red-500': isFieldInvalid('lastName')}"
              />
              <div *ngIf="isFieldInvalid('lastName')" class="text-red-500 text-sm mt-1">
                Nom requis
              </div>
            </div>
          </div>

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
              Le mot de passe doit contenir au moins 8 caractères
            </div>
          </div>

          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              id="confirmPassword"
              formControlName="confirmPassword"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#1E028C] focus:border-transparent"
              [ngClass]="{'border-red-500': isFieldInvalid('confirmPassword')}"
            />
            <div *ngIf="isFieldInvalid('confirmPassword')" class="text-red-500 text-sm mt-1">
              Les mots de passe ne correspondent pas
            </div>
          </div>

          <div class="flex items-center">
            <input
              type="checkbox"
              id="terms"
              formControlName="terms"
              class="h-4 w-4 text-[#1E028C] focus:ring-[#1E028C] border-gray-300 rounded"
            />
            <label for="terms" class="ml-2 block text-sm text-gray-700">
              J'accepte les <a href="#" class="text-[#1E028C] hover:underline">conditions d'utilisation</a>
            </label>
          </div>

          <button
            type="submit"
            class="w-full bg-[#1E028C] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition duration-200"
          >
            S'inscrire
          </button>
        </form>

        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Déjà un compte ?
            <a routerLink="/login" class="text-[#1E028C] hover:underline">
              Se connecter
            </a>
          </p>
        </div>
      </div>
    </div>
  `
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : {'mismatch': true};
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.signupForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      // Implement signup logic here
    } else {
      Object.keys(this.signupForm.controls).forEach(key => {
        const control = this.signupForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}