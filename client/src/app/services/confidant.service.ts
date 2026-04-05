/**
 * Confidant Service
 * Handles communication between Angular and the Node API.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Confidant } from '../models/confidant.model';

@Injectable({
  providedIn: 'root'
})
export class ConfidantService {

  /**
   * Base URL of backend API
   */
  apiURL = 'http://localhost:3000/confidants';

  constructor(private http: HttpClient) { }

  /**
   * GET all confidants
   */
  getConfidants(): Observable<Confidant[]> {

    return this.http.get<Confidant[]>(this.apiURL);

  }

  /**
   * GET single confidant
   */
  getConfidant(id: string): Observable<Confidant> {

    return this.http.get<Confidant>(`${this.apiURL}/${id}`);

  }

  /**
   * CREATE confidant
   */
  addConfidant(confidant: Confidant): Observable<Confidant> {

    return this.http.post<Confidant>(this.apiURL, confidant);

  }

  /**
   * UPDATE confidant
   */
  updateConfidant(id: string, confidant: Confidant): Observable<Confidant> {

    return this.http.put<Confidant>(`${this.apiURL}/${id}`, confidant);

  }

  /**
   * DELETE confidant
   */
  deleteConfidant(id: string): Observable<any> {

    return this.http.delete(`${this.apiURL}/${id}`);

  }

}