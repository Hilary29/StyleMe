import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-stylists',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="popular-stylists">
      <h2>Stylistes Populaires</h2>
      <div class="stylists-grid">
        <div *ngFor="let stylist of stylists" class="stylist-card">
          <img [src]="stylist.avatar" [alt]="stylist.name" class="stylist-avatar">
          <h3>{{ stylist.name }}</h3>
          <p>{{ stylist.specialty }}</p>
          <div class="rating">
            <span class="stars">⭐</span>
            <span>{{ stylist.rating }}/5</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .popular-stylists {
      padding: 2rem 0;
    }

    .stylists-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 1.5rem;
    }

    .stylist-card {
      text-align: center;
      padding: 1.5rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .stylist-avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-bottom: 1rem;
      margin: 0 auto;
      object-fit: cover;
    }

    .rating {
      margin-top: 0.5rem;
      color: #666;
    }
  `]
})
export class PopularStylistsComponent {
  stylists = [
    {
      name: 'Sophie Martin',
      avatar: '/testimonial3.png',
      specialty: 'Mode Urbaine',
      rating: 4.8
    },
    {
      name: 'Sophie Martin',
      avatar: '/testimonial4.png',
      specialty: 'Mode Urbaine',
      rating: 4.2
    },
    {
      name: 'Sophie Martin',
      avatar: '/testimonial5.png',
      specialty: 'Mode Urbaine',
      rating: 3.8
    },
    {
      name: 'Sophie Martin',
      avatar: '/testimonial6.png',
      specialty: 'Mode Urbaine',
      rating: 3.8
    },
    // Ajoutez plus de stylistes
  ];
}

