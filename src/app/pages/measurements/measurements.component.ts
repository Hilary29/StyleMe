import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Measurement {
  name: string;
  value: number;
}

@Component({
  selector: 'app-measurements',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="max-w-4xl mx-auto p-6 space-y-6">
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bold">Mes mesures</h1>
    <button
      class="bg-[#1E028C] text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
      (click)="showGuide = true"
    >
      Guide de mesures
    </button>
  </div>

  <!-- Measurement Display -->
  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white p-6 rounded-lg shadow space-y-4">
      <h2 class="font-semibold">Haut du corps</h2>
      <div class="grid grid-cols-2 gap-4">
        <div *ngFor="let measurement of measurements.upperBody">
          <p class="text-sm text-gray-600">{{ measurement.name }}</p>
          <p class="font-semibold">{{ measurement.value }} cm</p>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow space-y-4">
      <h2 class="font-semibold">Bas du corps</h2>
      <div class="grid grid-cols-2 gap-4">
        <div *ngFor="let measurement of measurements.lowerBody">
          <p class="text-sm text-gray-600">{{ measurement.name }}</p>
          <p class="font-semibold">{{ measurement.value }} cm</p>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Measurement Form -->
  <form (ngSubmit)="saveMeasurements()" class="space-y-6">
    <div class="grid md:grid-cols-2 gap-6">
      <div class="space-y-4">
        <h2 class="font-semibold">Haut du corps</h2>
        <div *ngFor="let measurement of measurements.upperBody; let i = index" class="flex items-center justify-between">
          <label [for]="'upper-' + measurement.name" class="text-sm text-gray-600">
            {{ measurement.name }}
          </label>
          <input
            type="number"
            [id]="'upper-' + measurement.name"
            [(ngModel)]="measurement.value"
            (ngModelChange)="handleMeasurementUpdate('upperBody', i, $event)"
            [name]="'upper-' + measurement.name"
            class="border rounded px-2 py-1 w-20"
          />
        </div>
      </div>
      <div class="space-y-4">
        <h2 class="font-semibold">Bas du corps</h2>
        <div *ngFor="let measurement of measurements.lowerBody; let i = index" class="flex items-center justify-between">
          <label [for]="'lower-' + measurement.name" class="text-sm text-gray-600">
            {{ measurement.name }}
          </label>
          <input
            type="number"
            [id]="'lower-' + measurement.name"
            [(ngModel)]="measurement.value"
            (ngModelChange)="handleMeasurementUpdate('lowerBody', i, $event)"
            [name]="'lower-' + measurement.name"
            class="border rounded px-2 py-1 w-20"
          />
        </div>
      </div>
    </div>
    <button type="submit" class="bg-[#1E028C] text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
      Sauvegarder les mesures
    </button>
  </form>

  <!-- Photo Upload -->
  <form (ngSubmit)="uploadPhoto()" class="space-y-4">
    <h2 class="font-semibold">Envoyer une photo de mesures spécifiques</h2>
    <div class="flex items-center space-x-4">
      <input
        type="file"
        accept="image/*"
        (change)="handleFileChange($event)"
        class="border p-2 rounded"
      />
      <button
        type="submit"
        [disabled]="!selectedFile"
        class="bg-[#1E028C] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 disabled:opacity-50"
      >
        Envoyer
      </button>
    </div>
    <p *ngIf="selectedFile" class="text-sm text-gray-600">Fichier sélectionné: {{ selectedFile.name }}</p>
  </form>

  <!-- Measurement Guide Modal -->
  <div *ngIf="showGuide" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <h2 class="text-2xl font-bold mb-4">Guide de prise de mesures</h2>
      <div class="space-y-4">
        <div>
          <h3 class="font-semibold">Épaules</h3>
          <p>Mesurez d'une extrémité de l'épaule à l'autre en passant par le haut du dos.</p>
          <video class="w-full mt-2" controls>
            <source src="/placeholder.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
        <div>
          <h3 class="font-semibold">Poitrine</h3>
          <p>Mesurez le tour de poitrine à l'endroit le plus fort, en passant par les omoplates.</p>
          <video class="w-full mt-2" controls>
            <source src="/placeholder.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </div>
      <button
        (click)="showGuide = false"
        class="mt-6 bg-[#1E028C] text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
      >
        Fermer le guide
      </button>
    </div>
  </div>
</div>

`,
})
export class MeasurementsComponent implements OnInit {
  showGuide = false;
  measurements = {
    upperBody: [
      { name: 'Épaules', value: 45 },
      { name: 'Poitrine', value: 92 },
      { name: 'Taille', value: 78 },
      { name: 'Longueur des bras', value: 65 }
    ],
    lowerBody: [
      { name: 'Hanches', value: 96 },
      { name: 'Entrejambe', value: 82 },
      { name: 'Longueur jambe', value: 98 },
      { name: 'Tour de cuisse', value: 55 }
    ]
  };

  selectedFile: File | null = null;

  ngOnInit() {
    // Initialization logic if needed
  }

  handleMeasurementUpdate(bodyPart: 'upperBody' | 'lowerBody', index: number, value: string) {
    this.measurements[bodyPart][index].value = parseInt(value) || 0;
  }

  saveMeasurements() {
    // Here you would typically save the measurements to the user's profile
    console.log('Saving measurements:', this.measurements);
  }

  handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }

  uploadPhoto() {
    if (this.selectedFile) {
      // Here you would typically upload the file to your server
      console.log('Uploading file:', this.selectedFile.name);
      // Reset the selected file after upload
      this.selectedFile = null;
    }
  }
}

