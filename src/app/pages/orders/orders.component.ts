import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6 pt-8 2xl:mx-[326px] mx-4">
      <h1 class="text-2xl font-bold">Historique des commandes</h1>
      
      <div class="grid gap-4">
        @for (order of orders; track order.id) {
          <div class="bg-white p-4 rounded-lg shadow">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="font-semibold">Commande #{{ order.id }}</h3>
                <p class="text-sm text-gray-600">{{ order.date | date:'longDate' }}</p>
                <p class="mt-2">{{ order.items }} articles</p>
              </div>
              <span class="px-3 py-1 rounded-full text-sm" 
                [ngClass]="{
                  'bg-green-100 text-green-800': order.status === 'Livré',
                  'bg-blue-100 text-blue-800': order.status === 'En cours',
                  'bg-yellow-100 text-yellow-800': order.status === 'En préparation'
                }"
              >
                {{ order.status }}
              </span>
            </div>
            <div class="mt-4 flex justify-between items-center">
              <span class="font-semibold">{{ order.total | currency:'EUR' }}</span>
              <button class="text-[#1E028C] hover:underline">Voir les détails</button>
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class OrdersComponent {
  orders = [
    {
      id: '1234',
      date: new Date('2024-01-15'),
      items: 3,
      status: 'Livré',
      total: 249.99
    },
    {
      id: '1235',
      date: new Date('2024-01-20'),
      items: 2,
      status: 'En cours',
      total: 159.99
    },
    {
        id: '1235',
      items: 2,
        status: 'En préparation',
        date: new Date('2024-01-21'),
        total: 159.99
      },
    // Ajoutez plus de commandes ici
  ];
}