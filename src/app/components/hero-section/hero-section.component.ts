import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedOutfitsComponent } from '../featured-outfits/featured-outfits.component';
import { FeaturedCollectionsComponent } from '../featured-collections/featured-collections.component';
import { PopularStylistsComponent } from '../popular-stylists/popular-stylists.component';
import { SpecialOffersComponent } from '../special-offers/special-offers.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    CommonModule,
    FeaturedOutfitsComponent,
    FeaturedCollectionsComponent,
    PopularStylistsComponent,
    SpecialOffersComponent
  ],
  template: `
    <section class="hero-section">
      <div class="hero-content">
        <h1>Découvrez votre Style</h1>
        <p>Les dernières tendances et les meilleurs stylistes réunis pour vous</p>
      </div>
      
      <app-featured-outfits />
      
      <div class="content-sections">
        <app-featured-collections />
        <app-popular-stylists />
        <app-special-offers />
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      padding: 2rem 1rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    .hero-content {
      text-align: center;
      margin-bottom: 3rem;
    }

    .hero-content h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: #333;
    }

    .hero-content p {
      font-size: 1.2rem;
      color: #666;
      max-width: 600px;
      margin: 0 auto;
    }

    .content-sections {
      margin-top: 3rem;
    }

    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2rem;
      }

      .hero-content p {
        font-size: 1rem;
      }
    }
  `]
})
export class HeroSectionComponent {}

