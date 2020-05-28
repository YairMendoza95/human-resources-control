import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

const baseUrl = `${environment.API_URL}/certification`;

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  getById(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(`${baseUrl}/add`, data);
  }

  edit(id, data) {
    return this.http.put(`${baseUrl}/edit/${id}`, data);
  }
}
