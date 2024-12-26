import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-stylist-availability',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow space-y-6">
      <h1 class="text-2xl font-bold">Publier une nouvelle disponibilité</h1>
      
      <form (submit)="handleSubmit($event)" class="space-y-4">
        <!-- Champ pour sélectionner une date -->
        <div>
          <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            id="date"
            [(ngModel)]="availability.date"
            name="date"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        
        <!-- Champ pour sélectionner une plage horaire -->
        <div>
          <label for="timeSlot" class="block text-sm font-medium text-gray-700">Plage horaire</label>
          <select
            id="timeSlot"
            [(ngModel)]="availability.timeSlot"
            name="timeSlot"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="" disabled selected>Choisissez une plage horaire</option>
            <option value="8:00-12:00">8:00 - 12:00</option>
            <option value="12:00-16:00">12:00 - 16:00</option>
            <option value="16:00-20:00">16:00 - 20:00</option>
          </select>
        </div>

        <!-- Bouton de soumission -->
        <button
          type="submit"
          class="bg-[#1E028C] text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none"
        >
          Publier
        </button>
      </form>

      <!-- Message de confirmation -->
      <div *ngIf="successMessage" class="p-4 mt-4 bg-green-100 text-green-700 rounded-lg">
        {{ successMessage }}
      </div>
    </div>
  `,
  styles: [`
    /* Ajoutez vos styles personnalisés ici si nécessaire */
  `]
})
export class StylistAvailabilityComponent {
  // Modèle pour les données de disponibilité
  availability = {
    date: '',
    timeSlot: '',
  };

  successMessage: string | null = null;

  handleSubmit(event: Event) {
    event.preventDefault();
    
    if (this.availability.date && this.availability.timeSlot) {
      // Simuler la publication de la disponibilité (remplacez par une API si nécessaire)
      console.log('Nouvelle disponibilité publiée:', this.availability);

      // Message de confirmation
      this.successMessage = `Disponibilité publiée pour le ${this.availability.date} (${this.availability.timeSlot}).`;

      // Réinitialisation du formulaire
      this.availability = {
        date: '',
        timeSlot: '',
      };
    } else {
      this.successMessage = null; // Pas de message si le formulaire est incomplet
    }
  }
}
