import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component'

@Component({
  selector: 'app-home',
  imports: [ RouterLink, HeroSectionComponent],
  template: `
  <div>

  <!-- Header -->
  <div
      class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center"
    >
      <button class="text-2xl" routerLink="/">
        <img src="/StyleMe.png" />
      </button>
      <nav class="flex gap-6 ">
        <a routerLink="/stylists" class="hover:text-blue-600">Stylists</a>
        <a routerLink="/outfits" class="hover:text-blue-600">Outfits</a>
        <a routerLink="/measurements" class="hover:text-blue-600"
          >Measurements</a
        >
        <a routerLink="/about" class="hover:text-blue-600">About Us</a>
      </nav>
      <div class="flex gap-4">
        <button class="font-semibold text-[#38059D] hover:text-[#38059dd2] px-2.5 py-2 rounded-md" routerLink="/login">
          Login
        </button>
        <button class="font-semibold text-white bg-[#38059D] hover:bg-[#38059dd2] px-2.5 py-2 rounded-md" routerLink="/login">
          Signup
        </button>
      </div> 
    </div>

    <!-- Hero -->
     <div>
     <app-hero-section />

     </div>
  




    <!-- Footer -->
     <div>
     <footer class="bg-slate-200 py-4 mt-8 text-center">
      <p class="text-gray-600 text-sm">
        &copy; 2024 StyleMe. All rights reserved.
      </p>
      <nav class="flex justify-center gap-4 mt-2">
        <a routerLink="/privacy-policy" class="hover:text-blue-600">Privacy Policy</a>
        <a routerLink="/terms" class="hover:text-blue-600">Terms of Service</a>
        <a routerLink="/contact" class="hover:text-blue-600">Contact Us</a>
      </nav>
    </footer>
     </div>

  </div>

  `,
  styles: ``
})
export class HomeComponent {}
