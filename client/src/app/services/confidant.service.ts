/**
 * Service for communicating with the Node API
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConfidantService {

  private apiUrl = 'http://localhost:3000/api/confidants';

  constructor(private http: HttpClient) {}

  /** GET all confidants */
  getConfidants(): Observable<any[]> {

    return this.http.get<any[]>(this.apiUrl);

  }

  /** GET one confidant */
  getConfidant(id: string): Observable<any> {

    return this.http.get<any>(`${this.apiUrl}/${id}`);

  }

  /** ADD confidant */
  addConfidant(confidant: any) {

    return this.http.post(this.apiUrl, confidant);

  }

  /** UPDATE confidant */
  updateConfidant(id: string, confidant: any) {

    return this.http.put(`${this.apiUrl}/${id}`, confidant);

  }

  /** DELETE confidant */
  deleteConfidant(id: string) {

    return this.http.delete(`${this.apiUrl}/${id}`);

  }

}