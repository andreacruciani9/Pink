import { AuthService } from './auth.service';
import { iUtente } from './../models/interface/i-utente';
import { iIndirizzo } from './../models/interface/i-indirizzo';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { iAccessToken } from '../models/interface/i-access-token';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment.development';
import { IndirizzoDTO } from '../models/interface/i-indirizzo';
import {
  Observable,
  catchError,
  finalize,
  forkJoin,
  switchMap,
  tap,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IndirizoSvcService {
  constructor(private http: HttpClient, private authSvc: AuthService) {}
  private isLoading = false;

  private backendUrl: string = environment.backend;
  public setindirizzo(
    indirizzoDTO: IndirizzoDTO
  ): Observable<iIndirizzo | HttpErrorResponse> {
    this.isLoading = true;
    let token = this.getToken();

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    let userId = this.authSvc.getLoggedUserId();
    let url = `${this.backendUrl}/crea/indirizzo/${userId}`;
    console.log('+++', url);

    return this.http.post<iIndirizzo>(url, indirizzoDTO, { headers });
  }
  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }
}
