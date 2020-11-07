import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';

const AUTH_URL = environment.backendUrl + '/auth/login'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tss: TokenStorageService) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_URL, {
      username: credentials.username,
      password: credentials.password
    }, httpOptions)
  }

  public isAuthenticated(): boolean {
    const token = this.tss.getToken();

    return !!token
  }
}
