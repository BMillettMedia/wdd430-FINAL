import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/*
  ConfidantService

  Handles all communication between the Angular frontend
  and the Node/Express backend API.
*/

@Injectable({
  providedIn: 'root'
})
export class ConfidantService {

  // Node API base URL
  apiUrl = 'http://localhost:3000/api/confidants';

  constructor(private http: HttpClient) {}

  /*
    GET all confidants
  */
  getConfidants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  /*
    GET one confidant by ID
  */
  getConfidant(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  /*
    CREATE new confidant
  */
  addConfidant(confidant: any): Observable<any> {
    return this.http.post(this.apiUrl, confidant);
  }

  /*
    UPDATE confidant
    This is the function your edit component calls
  */
  updateConfidant(confidant: any) {
  return this.http.put(`${this.apiUrl}/${confidant._id}`, confidant);
  }

  /*
    DELETE confidant
  */
  deleteConfidant(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  createConfidant(confidant: any) {
  return this.http.post(this.apiUrl, confidant);
}

  
}
