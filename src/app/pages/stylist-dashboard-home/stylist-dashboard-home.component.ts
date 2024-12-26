import { Component } from '@angular/core';
import { FeaturedOutfitsComponent } from '../../components/featured-outfits/featured-outfits.component';
import { FeaturedCollectionsComponent } from '../../components/featured-collections/featured-collections.component';
import { PopularStylistsComponent } from '../../components/popular-stylists/popular-stylists.component';
import { SpecialOffersComponent } from '../../components/special-offers/special-offers.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-stylist-dashboard-home',
  imports: [    FeaturedOutfitsComponent,
    FeaturedCollectionsComponent,
    PopularStylistsComponent,
    FooterComponent],
    template: `
    <section class="hero-section">
      <div class="hero-content">
        <h1>Créez et partagez de nouveaux styles</h1>
        <p>Les dernières tendances et les meilleurs stylistes réunis pour vous</p>
      </div>
      
      <app-featured-outfits />
      
      <div class="content-sections">
        <app-featured-collections />
        <app-popular-stylists />
      </div>
      <app-footer/>
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
export class StylistDashboardHomeComponent {

}
