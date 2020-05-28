import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

const baseUrl = `${environment.API_URL}/type-certification`;

@Injectable({
  providedIn: 'root'
})
export class TypeCertificationService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  getById(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  add(data) {
    return this.http.post(`${baseUrl}/add`, data);
  }

  edit(id, data) {
    return this.http.put(`${baseUrl}/edit/${id}`, data);
  }
}
