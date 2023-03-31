import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  
  getUsers(): Observable<any> {
    const url = `${this.baseUrl}/users`;
    return this.http.get(url);
  }
}
