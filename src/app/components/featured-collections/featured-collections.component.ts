import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-collections',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="featured-collections">
      <h2>Collections en Vedette</h2>
      <div class="collections-grid">
        <div *ngFor="let collection of collections" class="collection-card">
          <img [src]="collection.image" [alt]="collection.name">
          <div class="collection-info">
            <h3>{{ collection.name }}</h3>
            <p>{{ collection.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .featured-collections {
      padding: 2rem 0;
    }

    .collections-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 1.5rem;
    }

    .collection-card {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.3s ease;
    }

    .collection-card:hover {
      transform: translateY(-5px);
    }

    .collection-card img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .collection-info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1.5rem;
      background: linear-gradient(transparent, rgba(0,0,0,0.8));
      color: white;
    }
  `]
})
export class FeaturedCollectionsComponent {
  collections = [
    {
      name: 'Collection Afritude 2024',
      image: '/collection1.png',
      description: 'Découvrez nos nouvelles tendances en pagne'
    },
    // Ajoutez plus de collections
  ];
}

