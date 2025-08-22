import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
    private baseUrl = 'http://localhost:3000/teachers';

    constructor(private http: HttpClient) {}

    getAll(): Observable<any> {
        return this.http.get(`${this.baseUrl}/getAll`);
    }

    getById(id: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/getById/${id}`);
    }


    create(teacherData: any): Observable<any> {
      return this.http.post(`${this.baseUrl}/create`, teacherData);
    }

    update(id: string, teacherData: any): Observable<any> {
      return this.http.put(`${this.baseUrl}/update/${id}`, teacherData);
    }

    delete(id: string): Observable<any> {
      return this.http.delete(`${this.baseUrl}/delete/${id}`);
    }

}