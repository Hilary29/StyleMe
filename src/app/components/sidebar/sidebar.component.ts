import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <aside
      class="bg-white h-screen fixed left-0 shadow-lg transition-all duration-300 z-20"
      [class.w-64]="isOpen"
      [class.w-20]="!isOpen"
    >
      <!-- Toggle Button -->
      <button
        (click)="toggleSidebar()"
        class="absolute  top-4  text-white rounded-full p-1 pl-3  hover:bg-opacity-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="w-4 h-4"
        >
          <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </button>

      <div class="pt-4 space-y-8 ">
        <!-- Profile Section -->
        <div class="text-center hidden ">
          <div
            class="w-12 h-12 mx-auto rounded-full bg-[#7b729d] flex items-center justify-center"
            [class.w-12]="!isOpen"
            [class.h-12]="!isOpen"
            [class.w-20]="isOpen"
            [class.h-20]="isOpen"
          >
            <span
              class="text-white"
              [class.text-2xl]="isOpen"
              [class.text-base]="!isOpen"
            >
              {{ getUserInitials() }}
            </span>
          </div>
          <h2 class="mt-2 font-semibold truncate" [class.hidden]="!isOpen">
            {{ userName }}
          </h2>
        </div>

        <!-- Navigation -->
        <nav class="space-y-2">
          <a
            routerLink="/dashboard/orders"
            routerLinkActive="bg-[#1E028C] text-white"
            class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1E028C]/10 transition-colors"
            [class.justify-center]="!isOpen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="16"
              height="16"
            >
              <path
                d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
              />
            </svg>
            <span class="truncate" [class.hidden]="!isOpen"
              >Historique des commandes</span
            >
          </a>

          <a
            routerLink="/dashboard/measurements"
            routerLinkActive="bg-[#1E028C] text-white"
            class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1E028C]/10 transition-colors"
            [class.justify-center]="!isOpen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="16"
              height="16"
            >
              <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0L17.9 401.9c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 50.7-50.7c18.7-18.7 49.1-18.7 67.9 0l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9L177.9 494.1z"
              />
            </svg>
            <span class="truncate" [class.hidden]="!isOpen">Mes mesures</span>
          </a>

          <a
            routerLink="/dashboard/addresses"
            routerLinkActive="bg-[#1E028C] text-white"
            class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1E028C]/10 transition-colors"
            [class.justify-center]="!isOpen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width="16"
              height="16"
            >
              <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L48 0zM416 160l50.7 0L544 237.3l0 18.7-128 0 0-96zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
            <span class="truncate" [class.hidden]="!isOpen"
              >Adresses de livraison</span
            >
          </a>

          <a
            routerLink="/dashboard/tracking"
            routerLinkActive="bg-[#1E028C] text-white"
            class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1E028C]/10 transition-colors"
            [class.justify-center]="!isOpen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="16"
              height="16"
            >
              <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M50.7 58.5L0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5zM240 160l208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32l0 128zm208 32L0 192 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-224z"
              />
            </svg>
            <span class="truncate" [class.hidden]="!isOpen"
              >Suivi des commandes</span
            >
          </a>
        </nav>
      </div>
    </aside>

    <!-- Overlay for mobile -->
    @if (isOpen && isMobile) {
    <div
      class="fixed inset-0 bg-black bg-opacity-50 z-10"
      (click)="toggleSidebar()"
    ></div>
    }
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class SidebarComponent {
  userName = 'John Doe';
  isOpen = true;
  isMobile = false;

  constructor() {
    // Vérifier si on est sur mobile
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
  }

  checkMobile() {
    this.isMobile = window.innerWidth < 768;
    if (this.isMobile) {
      this.isOpen = false;
    }
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  getUserInitials(): string {
    return this.userName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', () => this.checkMobile());
  }
}
