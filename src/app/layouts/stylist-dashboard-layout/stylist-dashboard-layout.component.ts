import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { StylistSidebarComponent } from '../../components/stylist-sidebar/stylist-sidebar.component';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-stylist-dashboard-layout',
  standalone: true,
  imports: [PrimaryButtonComponent, RouterLink, CommonModule, RouterOutlet, StylistSidebarComponent],
  template: `
    <div class="min-h-screen bg-gray-50">
    <div
      class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center"
    >
      <button class="text-2xl" routerLink="/">
        <img src="/StyleMe.png"/></button>


      <app-primary-button label="Avatar" routerLink="/cart" />
    </div>
      <app-stylist-sidebar #sidebar />

      <main 
        class="transition-all duration-300 pt-[73px] p-6"
        [class.ml-64]="sidebar.isOpen"
        [class.ml-20]="!sidebar.isOpen"
      >
        <router-outlet />
      </main>
    </div>
  `
})
export class StylistDashboardLayoutComponent {}
