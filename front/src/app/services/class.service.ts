import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
    private baseUrl = 'http://localhost:3000/classes/getAll';

    constructor(private http: HttpClient) {}

    getAll(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }
}