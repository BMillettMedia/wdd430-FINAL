/**
 * Service responsible for communicating with the Node API
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

  /**
   * Get all confidants from database
   */
  getConfidants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  /**
   * Update notes field
   */
  updateNotes(id: string, notes: string) {

    return this.http.put(`${this.apiUrl}/${id}`, { notes });

  }

}