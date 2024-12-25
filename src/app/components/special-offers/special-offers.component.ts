import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-special-offers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="special-offers">
      <h2>Offres Spéciales</h2>
      <div class="offers-grid">
        <div *ngFor="let offer of offers" class="offer-card">
          <div class="offer-content">
            <h3>{{ offer.title }}</h3>
            <p class="discount">{{ offer.discount }}</p>
            <p class="description">{{ offer.description }}</p>
            <button class="offer-btn">En profiter</button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .special-offers {
      padding: 2rem 0;
    }

    .offers-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-top: 1.5rem;
    }

    .offer-card {
      background: #1E028C;
      border-radius: 8px;
      padding: 2rem;
      color: white;
      text-align: center;
    }

    .discount {
      font-size: 2rem;
      font-weight: bold;
      margin: 1rem 0;
    }

    .offer-btn {
      background: white;
      color: #1E028C;
      border: none;
      padding: 0.8rem 2rem;
      border-radius: 8px;
      font-weight: bold;
      margin-top: 1rem;
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    .offer-btn:hover {
      transform: scale(1.05);
    }
  `]
})
export class SpecialOffersComponent {
  offers = [
    {
      title: 'Offre de Bienvenue',
      discount: '-20%',
      description: 'Sur votre première commande'
    },
    // Ajoutez plus d'offres
  ];
}

