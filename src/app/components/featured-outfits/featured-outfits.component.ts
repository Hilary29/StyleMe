import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Import Swiper JS
import Swiper from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-featured-outfits',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="featured-outfits">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" *ngFor="let outfit of outfits">
            <div class="outfit-card">
              <img [src]="outfit.image" [alt]="outfit.name" class="outfit-image">
              <div class="outfit-info">
                <h3 class="font-semibold">{{ outfit.name }}</h3>
                <p>{{ outfit.price }} FCFA</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Navigation buttons -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <!-- Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  `,
  styles: [`
    .featured-outfits {
      width: 100%;
      padding: 20px 0;
      margin: 0 auto;
    }

    .swiper {
      width: 70%;
      height: 400px;
      padding: 20px 0;
      
      
    }

    .outfit-card {
      background: white;
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      height: 100%;
      
    }

    .outfit-image {
      width: 100%;
      height: 280px;
      object-fit: cover;
    }

    .outfit-info {
      padding: 15px;
    }

    .outfit-info h3 {
      margin: 0;
      font-size: 1.1rem;
      color: #333;
    }

    .outfit-info p {
      margin: 5px 0 0;
      color: #666;
    }

    :host ::ng-deep .swiper-button-next,
    :host ::ng-deep .swiper-button-prev {
      color: #333;
    }

    :host ::ng-deep .swiper-pagination-bullet-active {
      background: #333;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class FeaturedOutfitsComponent implements OnInit {
  outfits = [
    {
      name: 'Robe de ville',
      image: '/soiree-robe.webp',
      price: 25000
    },
    {
      name: 'Robe de Soirée',
      image: '/soiree-robe2.jpg',
      price: 50000
    },
    {
      name: 'Tailleur Pagne',
      image: '/respo-pagne.jpg',
      price: 40000
    },
    {
      name: 'Look Business',
      image: '/assets/images/outfit4.jpg',
      price: 90000
    }
  ];

  ngOnInit() {
    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    });
  }
}