import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.backendUrl + '/visit';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }

  post(visit) {
    return this.http.post(API_URL, {
      name: visit.name,
      phone: visit.phone
    })
  }
}
