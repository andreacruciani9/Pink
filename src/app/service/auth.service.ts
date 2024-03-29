import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO, UtenteDTO, iUtente } from '../models/interface/i-utente';
import { iAccessToken } from '../models/interface/i-access-token';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, tap, throwError } from 'rxjs';
import { error } from 'console';
import { environment } from '../../environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userId: string | null = null;
  constructor(private http: HttpClient) {}

  public authSbj = new BehaviorSubject<iAccessToken | null>(null);
  token$ = this.authSbj.asObservable();
  public isLoggedIn$ = this.token$.pipe(map((u) => !!u));
  public authoritiesSbj = new BehaviorSubject<string[] | null>(null);
  public getAuthorities$: Observable<string[] | null> =
    this.authoritiesSbj.asObservable();
  utente!: iAccessToken;
  private jwtHelper = new JwtHelperService();
  private backendUrl: string = environment.backend;

  public register(
    utenteDTO: UtenteDTO
  ): Observable<iUtente | HttpErrorResponse> {
    return this.http.post<iUtente>(
      `${this.backendUrl}/auth/register`,
      utenteDTO
    );
  }

  public login(loginDTO: LoginDTO): Observable<iAccessToken> {
    return this.http
      .post<iAccessToken>(`${this.backendUrl}/auth/login`, loginDTO)
      .pipe(
        map((res) => {
          localStorage.setItem('accessToken', res.accessToken);

          alert(res.id);
          localStorage.setItem('userId', res.id); // Salva l'ID dell'utente in localStorage
          this.authSbj.next(res);

          this.http
            .get<iUtente>(`${this.backendUrl}/profile`)
            .pipe(tap((utente) => this.authoritiesSbj.next(utente.ruolo)));

          return res;
        })
      );
  }
  public setLoggedUserId(userId: string): void {
    // Salva l'ID utente nel localStorage con la chiave 'userId'
    localStorage.setItem('userId', userId);
  }

  public getLoggedUserId(): string | null {
    // Recupera l'ID utente dal localStorage
    const userId: string | null = localStorage.getItem('userId');

    if (!userId) {
      console.error('ID utente non trovato nel localStorage');
      throwError('ID utente non trovato nel localStorage');
    }

    // Restituisci l'ID utente se presente, altrimenti restituisci null
    return userId;
  }

  public logout(): void {
    this.authSbj.next(null);
    localStorage.removeItem('accessToken');
  }

  public autoLogOutOrRefresh(token: string): void {
    const expDate = this.jwtHelper.getTokenExpirationDate(token) as Date;
    const remainingMs = expDate.getTime() - new Date().getTime();
    setTimeout(this.logout, remainingMs);
    // refresh with refreshToken.....
  }

  restoreClientStatelessSession() {
    const accessToken: string | null = localStorage.getItem('accessToken');
    if (!accessToken) return;
    if (this.jwtHelper.isTokenExpired(accessToken)) return;
    this.http
      .get<iUtente>(`${this.backendUrl}/profile`)
      .pipe(tap((utente) => this.authoritiesSbj.next(utente.ruolo)));
    this.autoLogOutOrRefresh(accessToken);
    this.authSbj.next({ accessToken: accessToken, id: '' });
  }
}
