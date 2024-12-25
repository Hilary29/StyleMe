import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-measurements',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Mes mesures</h1>
        <button class="bg-[#1E028C] text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
          Ajouter des mesures
        </button>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 class="font-semibold">Haut du corps</h2>
          <div class="grid grid-cols-2 gap-4">
            @for (measurement of upperBodyMeasurements; track measurement.name) {
              <div>
                <p class="text-sm text-gray-600">{{ measurement.name }}</p>
                <p class="font-semibold">{{ measurement.value }} cm</p>
              </div>
            }
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 class="font-semibold">Bas du corps</h2>
          <div class="grid grid-cols-2 gap-4">
            @for (measurement of lowerBodyMeasurements; track measurement.name) {
              <div>
                <p class="text-sm text-gray-600">{{ measurement.name }}</p>
                <p class="font-semibold">{{ measurement.value }} cm</p>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `
})
export class MeasurementsComponent {
  upperBodyMeasurements = [
    { name: 'Épaules', value: 45 },
    { name: 'Poitrine', value: 92 },
    { name: 'Taille', value: 78 },
    { name: 'Longueur des bras', value: 65 }
  ];

  lowerBodyMeasurements = [
    { name: 'Hanches', value: 96 },
    { name: 'Entrejambe', value: 82 },
    { name: 'Longueur jambe', value: 98 },
    { name: 'Tour de cuisse', value: 55 }
  ];
}