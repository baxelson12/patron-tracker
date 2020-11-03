import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeAll } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API_URL = environment.backendUrl

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<any[]>(API_URL + '/employee')
  }

  createEmployee(employee) {
    return this.http.post(API_URL + '/employee', {
      username: employee.username,
      password: employee.password,
      email: employee.email,
      role: "admin"
    })
  }

  deleteEmployee(id: number) {
    return this.http.delete(API_URL + `/employee/${id}`);
  }
}
