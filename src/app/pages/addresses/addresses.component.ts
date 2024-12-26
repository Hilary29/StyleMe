import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addresses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="pt-16 px-32 xl:mx-[326px] mx-4 ">
      <h1 class="text-xl font-bold mb-4">Ajouter une adresse de livraison</h1>

      <form (ngSubmit)="saveAddress()" class="space-y-4 bg-white p-12 rounded-md">
        <div>
          <label for="name" class="block font-medium">Nom complet</label>
          <input
            id="name"
            [(ngModel)]="address.name"
            name="name"
            type="text"
            placeholder="Ex : John Doe"
            class="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label for="street" class="block font-medium">Rue/Adresse</label>
          <input
            id="street"
            [(ngModel)]="address.street"
            name="street"
            type="text"
            placeholder="Ex : 123 rue de Paris"
            class="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label for="city" class="block font-medium">Ville</label>
          <input
            id="city"
            [(ngModel)]="address.city"
            name="city"
            type="text"
            placeholder="Ex : Yaoundé"
            class="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label for="phone" class="block font-medium">Téléphone</label>
          <input
            id="phone"
            [(ngModel)]="address.phone"
            name="phone"
            type="tel"
            placeholder="Ex : +237 670123456"
            class="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Enregistrer
        </button>
      </form>

      <div *ngIf="savedAddress" class="mt-6 p-4 border rounded bg-gray-100">
        <h2 class="font-bold">Adresse enregistrée :</h2>
        <p><strong>Nom :</strong> {{ savedAddress.name }}</p>
        <p><strong>Rue :</strong> {{ savedAddress.street }}</p>
        <p><strong>Ville :</strong> {{ savedAddress.city }}</p>
        <p><strong>Téléphone :</strong> {{ savedAddress.phone }}</p>
      </div>
    </div>
  `,
  styles: [],
})
export class AddressesComponent {
  address = {
    name: '',
    street: '',
    city: '',
    phone: '',
  };

  savedAddress: any = null;

  saveAddress() {
    this.savedAddress = { ...this.address };
    alert('Adresse enregistrée avec succès !');
  }
}
