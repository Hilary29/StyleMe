import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <aside
      class="bg-[#1E028C] text-white h-screen fixed left-0 shadow-lg transition-all duration-300 z-20"
      [class.w-72]="isOpen"
      [class.w-20]="!isOpen"
    >
      <!-- Toggle Button -->
      <button
        (click)="toggleSidebar()"
        class="absolute top-4 left-[50%] transform -translate-x-1/2  text-white rounded-full p-2 hover:bg-opacity-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="w-6 h-6"
        >
          <path
            fill="currentColor"
            d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm416 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h352c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </button>

            <!-- Sidebar Content -->
            <nav class="space-y-2 px-2 pt-16">
        <!-- Menu items -->
        <a
          routerLink="/dashboard/orders"
          routerLinkActive="bg-[#a013bf] text-white"
          class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#a013bf]/90 transition-colors"
          [class.justify-center]="!isOpen"
        >
          <span>🕒</span>
          <span class="truncate" [class.hidden]="!isOpen">Historique des commandes</span>
        </a>
        <a
          routerLink="/dashboard/measurements"
          routerLinkActive="bg-[#a013bf] text-white"
          class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#a013bf]/90 transition-colors"
          [class.justify-center]="!isOpen"
        >
          <span>🧵</span>
          <span class="truncate" [class.hidden]="!isOpen">Mes mesures</span>
        </a>
        <a
          routerLink="/dashboard/see-availability"
          routerLinkActive="bg-[#a013bf] text-white"
          class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#a013bf]/90 transition-colors"
          [class.justify-center]="!isOpen"
        >
          <span>🧑‍🎨</span>
          <span class="truncate" [class.hidden]="!isOpen">Stylistes</span>
        </a>
        <a
          routerLink="/dashboard/addresses"
          routerLinkActive="bg-[#a013bf] text-white"
          class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#a013bf]/90 transition-colors"
          [class.justify-center]="!isOpen"
        >
          <span>📍</span>
          <span class="truncate" [class.hidden]="!isOpen">Adresse de livraison</span>
        </a>
        <a
          routerLink="/dashboard/tracking"
          routerLinkActive="bg-[#a013bf] text-white"
          class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#a013bf]/90 transition-colors"
          [class.justify-center]="!isOpen"
        >
          <span>🚚</span>
          <span class="truncate" [class.hidden]="!isOpen">Suivi des commandes</span>
        </a>
        <a
          routerLink="/dashboard/settings"
          routerLinkActive="bg-[#a013bf] text-white"
          class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#a013bf]/90 transition-colors"
          [class.justify-center]="!isOpen"
        >
          <span>⚙️</span>
          <span class="truncate" [class.hidden]="!isOpen">Paramètres</span>
        </a>
      </nav>


      <div class=" space-y-8 pt-80">
        <!-- Profile Section -->
        <div class="text-center  ">
          <div
            class="w-12 h-12 mx-auto rounded-full bg-[#3c2883] flex items-center justify-center"
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
