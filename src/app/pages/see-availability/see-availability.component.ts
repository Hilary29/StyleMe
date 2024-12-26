
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Stylist {
  id: number;
  name: string;
  availability: Date[]; // Liste des dates disponibles
}

@Component({
  selector: 'app-see-availability',
  imports: [CommonModule],
  template: `
    <div class="max-w-4xl mx-auto p-6 space-y-6">
      <h1 class="text-2xl font-bold">Disponibilité des Stylistes</h1>

      <!-- Liste des couturières -->
      <div class="space-y-4">
        <div *ngFor="let stylist of stylists" class="p-4 bg-white shadow rounded-lg">
          <h2 class="text-lg font-semibold">{{ stylist.name }}</h2>

          <!-- Calendrier -->
          <div class="flex items-center space-x-4 mt-4">
            <label for="date-picker-{{ stylist.id }}" class="text-sm font-medium">Choisissez une date :</label>
            <input
              id="date-picker-{{ stylist.id }}"
              type="date"
              [min]="getMinDate()"
              (change)="handleDateSelection($event, stylist.id)"
              class="border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <!-- Réservation -->
          <button
            [disabled]="!selectedDates[stylist.id]"
            (click)="bookDate(stylist.id)"
            class="mt-4 bg-[#1E028C] text-white px-4 py-2 rounded-lg"
          >
            Réserver cette date
          </button>

          <!-- Confirmation -->
          <p *ngIf="reservations[stylist.id]" class="mt-2 text-green-600">
            Réservation confirmée pour le {{ reservations[stylist.id] | date: 'longDate' }}.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class SeeAvailabilityComponent {
  // Liste des couturières avec leurs disponibilités
  stylists: Stylist[] = [
    { id: 1, name: 'Couturière A', availability: [new Date('2024-12-28'), new Date('2024-12-30')] },
    { id: 2, name: 'Couturière B', availability: [new Date('2024-12-27'), new Date('2024-12-29')] },
  ];

  selectedDates: { [stylistId: number]: string } = {}; // Date sélectionnée pour chaque couturière
  reservations: { [stylistId: number]: string } = {}; // Réservations confirmées

  // Gérer la sélection de date
  handleDateSelection(event: Event, stylistId: number): void {
    const input = event.target as HTMLInputElement;
    const selectedDate = input.value; // Récupérer la date sélectionnée (format ISO)
    if (this.isDateAvailable(stylistId, selectedDate)) {
      this.selectedDates[stylistId] = selectedDate;
    } else {
      alert("Cette date n'est pas disponible pour cette couturière.");
    }
  }

  // Vérifie si la date est disponible pour une couturière
  isDateAvailable(stylistId: number, date: string): boolean {
    const stylist = this.stylists.find((s) => s.id === stylistId);
  
    // Vérifier si le styliste existe et qu'il a des disponibilités
    if (stylist && stylist.availability) {
      return stylist.availability.some((availableDate) => {
        const availableISO = availableDate.toISOString().split('T')[0];
        return availableISO === date;
      });
    }
  
    // Retourner false si stylist est undefined ou si availability est vide
    return false;
  }
  

  // Réserver une date
  bookDate(stylistId: number): void {
    if (this.selectedDates[stylistId]) {
      this.reservations[stylistId] = this.selectedDates[stylistId];
      alert(`Votre réservation pour la couturière ${stylistId} a été confirmée.`);
    }
  }

  // Retourne la date minimale (aujourd'hui)
  getMinDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }
}
