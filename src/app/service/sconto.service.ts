// sconto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ScontoDTO } from '../models/interface/i-sconto';

@Injectable({
  providedIn: 'root',
})
export class ScontoService {
  private backendUrl = `${environment.backend}`;

  constructor(private http: HttpClient) {}

  createSconto(sconto: ScontoDTO, prodottoId: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    });

    return this.http.post(`${this.backendUrl}/sconto/${prodottoId}`, sconto, {
      headers,
    });
  }
}
