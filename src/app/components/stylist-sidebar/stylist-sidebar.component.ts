import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-stylist-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <aside
      class="bg-[#1E028C] text-white h-screen fixed left-0 shadow-lg transition-all duration-300 z-20"
      [class.w-64]="isOpen"
      [class.w-20]="!isOpen"
    >
      <!-- Toggle Button -->
      <button
        (click)="toggleSidebar()"
        class="absolute top-4 left-[50%] transform -translate-x-1/2 bg-[#a013bf] text-white rounded-full p-2 hover:bg-opacity-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="w-4 h-4"
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
          routerLink="/stylist-dashboard/creations"
          routerLinkActive="bg-[#a013bf] text-white"
          class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#a013bf]/90 transition-colors"
          [class.justify-center]="!isOpen"
        >
          <span>👗</span>
          <span class="truncate" [class.hidden]="!isOpen">Mes Créations</span>
        </a>
        <a
          routerLink="/stylist-dashboard/collections"
          routerLinkActive="bg-blue-500 text-white"
          class="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100 transition-colors"
          [class.justify-center]="!isOpen"
        >
          <span>🛍️</span>
          <span class="truncate" [class.hidden]="!isOpen">Mes collections</span>
        </a>
        <a
          routerLink="/stylist-dashboard/availability"
          routerLinkActive="bg-blue-500 text-white"
          class="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100 transition-colors"
          [class.justify-center]="!isOpen"
        >
          <span>📅</span>
          <span class="truncate" [class.hidden]="!isOpen">Disponibilité</span>
        </a>
        <a
          routerLink="/stylist-dashboard/orders"
          routerLinkActive="bg-blue-500 text-white"
          class="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100 transition-colors"
          [class.justify-center]="!isOpen"
        >
          <span>📦</span>
          <span class="truncate" [class.hidden]="!isOpen">Commandes</span>
        </a>

        <a
          routerLink="/stylist-dashboard/payments"
          routerLinkActive="bg-blue-500 text-white"
          class="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100 transition-colors"
          [class.justify-center]="!isOpen"
        >
          <span>💳</span>
          <span class="truncate" [class.hidden]="!isOpen">Paiements</span>
        </a>

        <a
          routerLink="/stylist-dashboard/settings"
          routerLinkActive="bg-blue-500 text-white"
          class="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100 transition-colors"
          [class.justify-center]="!isOpen"
        >
          <span>⚙️</span>
          <span class="truncate" [class.hidden]="!isOpen">Paramètres</span>
        </a>
      </nav>
    </aside>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      /* Make the sidebar responsive */
      @media (max-width: 768px) {
        aside {
          left: 0;
          bottom: 0;
        }
        .w-64 {
          width: 100% !important;
        }
      }
    `,
  ],
})
export class StylistSidebarComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}