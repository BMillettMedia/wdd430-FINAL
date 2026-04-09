import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Confidant {
  _id?: string;
  name: string;
  arcana: string;
  game: string;
  rank: number;
  maxRank: number;
  notes: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfidantService {

  private apiUrl = 'http://localhost:3000/confidants';

  constructor(private http: HttpClient) {}

  getConfidants(): Observable<Confidant[]> {
    return this.http.get<Confidant[]>(this.apiUrl);
  }

  getConfidant(id: string): Observable<Confidant> {
    return this.http.get<Confidant>(`${this.apiUrl}/${id}`);
  }

  createConfidant(confidant: Confidant) {
    return this.http.post(this.apiUrl, confidant);
  }

  updateConfidant(id: string, confidant: Confidant) {
    return this.http.put(`${this.apiUrl}/${id}`, confidant);
  }

  deleteConfidant(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}