import { iAccessToken } from './../../models/interface/i-access-token';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, combineLatest, switchMap, take } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../../app/service/auth.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {
  constructor(
    private authSrv: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: String
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return combineLatest([
      this.authSrv.getLoggedUserId(),
      this.authSrv.token$,
    ]).pipe(
      switchMap(([userId, accessToken]) => {
        if (!userId && isPlatformBrowser(this.platformId)) {
          // Non c'è un utente loggato, continua con la richiesta originale
          return next.handle(request);
        }
        const userIdString = userId ? userId.toString() : '';
        // Aggiungi l'ID utente e l'accessToken all'intestazione di autorizzazione
        const newReq = request.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`,
            UserId: userIdString, // Includi l'ID utente nell'intestazione personalizzata (ad esempio, UserId)
          },
        });

        // Procedi con la richiesta modificata
        return next.handle(newReq);
      })
    );
  }
  //return this.authSrv.token$.pipe(
  //  switchMap((user: iAccessToken | null) => {
  //    if (!user && isPlatformBrowser(PLATFORM_ID))
  //      return next.handle(request);
  //    const newReq = request.clone({
  //      headers: request.headers.append(
  //        'Authorization',
  //        `Bearer ${user?.accessToken}`
  //      ),
  //    });
  //    if (isPlatformBrowser(PLATFORM_ID)) {
  //       return next.handle(newReq);
  //    } else return next.handle(request);
  //  })
  //);
}
