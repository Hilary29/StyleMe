import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreationService {

  private apiUrl = 'http://localhost/api/creations'; // URL de votre API Laravel

  constructor(private http: HttpClient) { }

  // Récupérer toutes les créations
  getCreations(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Ajouter une nouvelle création
  addCreation(creation: any): Observable<any> {
    return this.http.post(this.apiUrl, creation);
  }
}
