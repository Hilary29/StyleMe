import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent],
  template: `
    <div class="min-h-screen bg-slate-50">
      <app-header />
      <app-sidebar #sidebar />
      
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
export class DashboardLayoutComponent {}