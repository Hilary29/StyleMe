import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">
      <h1 class="text-2xl font-bold">Suivi des commandes</h1>

      @for (order of activeOrders; track order.id) {
        <div class="bg-white p-6 rounded-lg shadow">
          <div class="flex justify-between items-start mb-6">
            <div>
              <h3 class="font-semibold">Commande #{{ order.id }}</h3>
              <p class="text-sm text-gray-600">Expédié le {{ order.shippingDate | date:'shortDate' }}</p>
            </div>
            <span class="text-[#1E028C] font-semibold">
              Livraison prévue le {{ order.expectedDelivery | date:'shortDate' }}
            </span>
          </div>

          <div class="relative">
            <div class="h-1 bg-gray-200 rounded">
              <div 
                class="h-1 bg-[#1E028C] rounded" 
                [style.width]="order.progress + '%'"
              ></div>
            </div>

            <div class="mt-6 grid grid-cols-4 gap-4">
              @for (step of order.steps; track step.name) {
                <div class="text-center">
                  <div 
                    class="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center"
                    [ngClass]="{
                      'bg-[#1E028C] text-white': step.completed,
                      'bg-gray-200': !step.completed
                    }"
                  >
                    <span class="text-sm">{{ $index + 1 }}</span>
                  </div>
                  <p class="text-sm" [class.font-semibold]="step.completed">
                    {{ step.name }}
                  </p>
                  @if (step.date && step.completed) {
                    <p class="text-xs text-gray-600">{{ step.date | date:'short' }}</p>
                  }
                </div>
              }
            </div>
          </div>
        </div>
      }
    </div>
  `
})
export class TrackingComponent {
  activeOrders = [
    {
      id: '1235',
      shippingDate: new Date('2024-01-20'),
      expectedDelivery: new Date('2024-01-25'),
      progress: 50,
      steps: [
        {
          name: 'Commande confirmée',
          completed: true,
          date: new Date('2024-01-20')
        },
        {
          name: 'En préparation',
          completed: true,
          date: new Date('2024-01-21')
        },
        {
          name: 'En transit',
          completed: false
        },
        {
          name: 'Livré',
          completed: false
        }
      ]
    }
  ];
}