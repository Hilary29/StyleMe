import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private users = signal<User[]>([]);
  readonly url = 'https://jsonplaceholder.typicode.com/users';

  // GET - Récupérer tous les utilisateurs
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      tap(users => this.users.set(users))
    );
  }

  // GET - Récupérer un utilisateur par son ID
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  // POST - Créer un nouvel utilisateur
  createUser(user: Omit<User, 'id'>): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  // PUT - Mettre à jour un utilisateur
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${user.id}`, user);
  }

  // PATCH - Mettre à jour partiellement un utilisateur
  patchUser(id: number, changes: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.url}/${id}`, changes);
  }

  // DELETE - Supprimer un utilisateur
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}