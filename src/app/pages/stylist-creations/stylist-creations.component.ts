import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stylist-creations',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen  flex flex-col items-center bg-gray-100 py-10">
      <!-- Tab Navigation -->
      <div class="w-full max-w-lg bg-white shadow-lg rounded-lg">
        <div class="flex border-b">
          <button
            (click)="activeTab = 0"
            [class.border-indigo-500]="activeTab === 0"
            class="flex-1 text-center py-2 px-4 border-b-2 focus:outline-none"
          >
            Ajouter une création
          </button>
          <button
            (click)="activeTab = 1"
            [class.border-indigo-500]="activeTab === 1"
            class="flex-1 text-center py-2 px-4 border-b-2 focus:outline-none"
          >
            Voir les créations
          </button>
        </div>

        <!-- Tab Content -->
        <div class="p-6">
          <div *ngIf="activeTab === 0">
            <!-- Add Creation Form -->
            <h1 class="text-2xl font-semibold text-gray-800 mb-6">Ajouter un Article</h1>
            <div class="bg-white shadow-lg rounded-lg p-6">
              <form (ngSubmit)="addCreation()" class="flex flex-col gap-4">
                <!-- Image Upload -->
                <div class="flex flex-col gap-2">
                  <label for="photo" class="font-medium text-gray-700">Photo de l'article</label>
                  <input
                    type="file"
                    id="photo"
                    class="border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-500 focus:outline-none"
                    (change)="onFileChange($event)"
                  />
                </div>

                <!-- Nom -->
                <div class="flex flex-col gap-2">
                  <label for="name" class="font-medium text-gray-700">Nom de l'article</label>
                  <input
                    type="text"
                    id="name"
                    [(ngModel)]="name"
                    name="name"
                    class="border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-500 focus:outline-none"
                    placeholder="Entrez le nom de l'article"
                    required
                  />
                </div>

                <!-- Description -->
                <div class="flex flex-col gap-2">
                  <label for="description" class="font-medium text-gray-700">Description</label>
                  <textarea
                    id="description"
                    [(ngModel)]="description"
                    name="description"
                    rows="3"
                    class="border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-500 focus:outline-none"
                    placeholder="Entrez une description"
                    required
                  ></textarea>
                </div>

                <!-- Prix -->
                <div class="flex flex-col gap-2">
                  <label for="price" class="font-medium text-gray-700">Prix (€)</label>
                  <input
                    type="number"
                    id="price"
                    [(ngModel)]="price"
                    name="price"
                    class="border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-500 focus:outline-none"
                    placeholder="Entrez le prix"
                    required
                  />
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
                >
                  Ajouter l'article
                </button>
              </form>
            </div>
          </div>

          <div *ngIf="activeTab === 1">
            <!-- Display Created Articles -->
            <h1 class="text-2xl font-semibold text-gray-800 mb-6">Créations Existantes</h1>
            <div *ngFor="let creation of creations" class="bg-white shadow-lg rounded-lg p-6 mb-4">
              <div
                class="bg-gray-200 rounded-md mb-4"
                style="width: 367.33px; height: 199px;"
              >
                <img
                  [src]="creation.image"
                  alt="Image de l'article"
                  class="w-full h-full object-cover rounded-md"
                />
              </div>
              <div class="flex flex-col items-start gap-2">
                <h2 class="text-lg font-semibold text-gray-800">{{ creation.name }}</h2>
                <p class="text-sm text-gray-600">{{ creation.description }}</p>
                <p class="text-base font-medium text-indigo-600">{{ creation.price }} €</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class StylistCreationsComponent {
  activeTab: number = 0; // 0: Ajouter, 1: Voir
  name: string = '';
  description: string = '';
  price: number | null = null; // price peut être null
  previewImage: string | null = null;

  creations: { name: string; description: string; price: number | null; image: string | null }[] = [
    {
      name: 'Robe de soirée',
      description: 'Une belle robe de soirée en satin.',
      price: 120,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Veste en cuir',
      description: 'Veste en cuir pour l\'automne.',
      price: 80,
      image: 'https://via.placeholder.com/150',
    },
  ];

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  addCreation(): void {
    const newCreation = {
      name: this.name,
      description: this.description,
      price: this.price,
      image: this.previewImage,
    };
    this.creations.push(newCreation);
    alert('Article ajouté avec succès !');
    // Reset the form
    this.name = '';
    this.description = '';
    this.price = null;
    this.previewImage = null;
  }
}
