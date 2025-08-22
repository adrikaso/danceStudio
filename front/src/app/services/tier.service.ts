import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TierService {
    private baseUrl = 'http://localhost:3000/tiers';

    constructor(private http: HttpClient) {}

    getAll(): Observable<any> {
        return this.http.get(`${this.baseUrl}/getAll`);
    }

    getById(id: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/getById/${id}`);
    }


    create(tierData: any): Observable<any> {
      return this.http.post(`${this.baseUrl}/create`, tierData);
    }

    update(id: string, tierData: any): Observable<any> {
      return this.http.put(`${this.baseUrl}/update/${id}`, tierData);
    }

    delete(id: string): Observable<any> {
      return this.http.delete(`${this.baseUrl}/delete/${id}`);
    }

}