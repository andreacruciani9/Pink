import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import {
  IProdotto,
  IProdottoResponse,
  ProdottoDTO,
} from '../models/interface/i-prodotto'; // Aggiusta il percorso se necessario
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProdottoService {
  private backendUrl = environment.backend; // Assicurati che environment.ts contenga backendUrl
  prodotti: IProdotto[] = [];
  constructor(private http: HttpClient) {}

  creaProdotto(prodotto: ProdottoDTO): Observable<IProdotto> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    });
    return this.http
      .post<IProdotto>(`${this.backendUrl}/prodotto/save`, prodotto, {
        headers,
      })
      .pipe(
        tap((prodottoCreato: IProdotto) => {
          console.log(this.prodotti); // Verifica cosa c'è in prodotti

          this.prodotti.push(prodottoCreato); // Salva il prodotto creato nell'array
          localStorage.setItem('prodottoId', prodottoCreato.id); // Salva l'ID del prodotto nel localStorage
        })
      );
  }

  uploadImmagineProdotto(prodottoId: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('upload', file, file.name);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    });
    return this.http.patch(
      `${this.backendUrl}/upload/${prodottoId}`,
      formData,
      { headers }
    );
  }
  // Ottiene i dettagli di un singolo prodotto
  getProdottoById(prodottoId: string): Observable<IProdotto> {
    // Assicurati che getAuthHeaders() restituisca un oggetto con solo le intestazioni HTTP
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      }),
    };

    return this.http.get<IProdotto>(
      `${this.backendUrl}/${prodottoId}`,
      options
    );
  }
  getAllProdotti(): Observable<IProdotto[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    });
    // Verifica se l'array 'prodotti' ha già elementi
    if (this.prodotti.length > 0) {
      // Se sì, ritorna direttamente l'array senza fare la chiamata HTTP
      return of(this.prodotti);
    } else {
      // Se no, effettua la chiamata HTTP per ottenere i prodotti
      return this.http
        .get<IProdottoResponse>(`${this.backendUrl}/prodotto`, { headers })
        .pipe(
          tap((res) => (this.prodotti = res.content)), // Salva i prodotti nell'array 'prodotti'
          map((res: IProdottoResponse) => res.content)
        );
    }
  }

  // Elimina un prodotto
  eliminaProdotto(prodottoId: string): Observable<void> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    });
    return this.http.delete<void>(`${this.backendUrl}/delete/${prodottoId}`, {
      headers,
    });
  }
}

//import { IProdotto, ProdottoDTO } from './../models/interface/i-prodotto';
//import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { environment } from '../../environments/environment'; // Assumi l'esistenza di un file di configurazione ambientale
//
//@Injectable({
//  providedIn: 'root'
//})
//export class ProdottoService {
//  private backendUrl: string = environment.backend + '/prodotto';
//
//  constructor(private http: HttpClient) { }
//
//  private getHttpOptions() {
//    const token = localStorage.getItem('accessToken');
//    return {
//      headers: new HttpHeaders({
//        'Content-Type': 'application/json',
//        'Authorization': `Bearer ${token}`
//      })
//    };
//  }
//
//  addProdotto(prodotto: ProdottoDTO): Observable<any> {
//    return this.http.post(`${this.backendUrl}/save`, prodotto, this.getHttpOptions());
//  }
//
//  updateProdotto(id: string, prodotto: ProdottoDTO): Observable<any> {
//    return this.http.put(`${this.backendUrl}/update/${id}`, prodotto, this.getHttpOptions());
//  }
//
//  deleteProdotto(id: string): Observable<any> {
//    return this.http.delete(`${this.backendUrl}/delete/${id}`, this.getHttpOptions());
//  }
//
//  getProdottoById(id: string): Observable<any> {
//    return this.http.get(`${this.backendUrl}/${id}`, this.getHttpOptions());
//  }
//
//  uploadImmagine(id: string, immagine: File): Observable<any> {
//    const formData = new FormData();
//    formData.append('upload', immagine);
//    const token = localStorage.getItem('accessToken');
//    return this.http.patch(`${this.backendUrl}/upload/${id}`, formData, {
//      headers: new HttpHeaders({
//        'Authorization': `Bearer ${token}`
//      })
//    });
//  }
//
//  cercaProdottiByNome(nome: string): Observable<any> {
//    return this.http.get(`${this.backendUrl}/cerca-by-nome/name?nome=${nome}`, this.getHttpOptions());
//  }
//}

//import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { Injectable } from '@angular/core';
//import { environment } from '../../environments/environment.development';
//import { Observable, map, throwError } from 'rxjs';
//import { IProdotto, ProdottoDTO } from '../models/interface/i-prodotto';
//import { log } from 'console';
//
//@Injectable({
//  providedIn: 'root',
//})
//export class ProdottoService {
//  constructor(private http: HttpClient) {}
//  private backendUrl: string = environment.backend + '/prodotto';
//
//  // Metodo per ottenere tutti i prodotti
//  getProducts(): Observable<any> {
//    return this.http.get<any>(this.backendUrl);
//  }
//  // Metodo per aggiungere un nuovo prodotto
//  //addProduct(
//  //  prodottoDTO: ProdottoDTO
//  //): Observable<IProdotto | HttpErrorResponse> {
//  //  let token = this.getToken();
//  //  console.log('----', token);
//
//  //  const headers = {
//  //    Authorization: `Bearer ${token}`,
//  //  };
//  //  alert(headers);
//
//  //  return this.http
//  //    .post<IProdotto>(`${this.backendUrl}/prodotto /save`, prodottoDTO, {
//  //      headers,
//  //    })
//
//  //    .pipe(
//  //      map((res) => {
//  //        localStorage.setItem('prodottoid', res.id);
//  //        console.log(res);
//
//  //        return res;
//  //      })
//  //    );
//  //}
//  addProduct(
//    prodottoDTO: ProdottoDTO
//  ): Observable<IProdotto | HttpErrorResponse> {
//    let token = this.getToken();
//    console.log('Token:', token);
//
//    const headers = {
//      Authorization: `Bearer ${token}`,
//    };
//    console.log('---', token);
//
//    return this.http
//      .post<IProdotto>(`${this.backendUrl}/prodotto/save`, prodottoDTO, {
//        headers,
//      })
//      .pipe(
//        map((res) => {
//          localStorage.setItem('prodottoid', res.id);
//          console.log('Risposta:', res);
//          return res;
//        })
//      );
//  }
//  getToken(): string | null {
//    return localStorage.getItem('accessToken');
//  }
//  setProdsottoId(prodottoid: string): void {
//    localStorage.setItem('prodottoid', prodottoid);
//  }
//  getProddottoid(): string | null {
//    const prodottoid: string | null = localStorage.getItem('prodottoid');
//    if (!prodottoid) {
//      console.error('id prodotto non trovato nel local storage');
//      throwError('id prodotto non trovato nel localstorage');
//    }
//    return prodottoid;
//  }
//  // Metodo per aggiornare un prodotto esistente
//  updateProduct(id: string, ProdottoDTO: ProdottoDTO): Observable<any> {
//    return this.http.put<any>(`${this.backendUrl}/update/${id}`, ProdottoDTO);
//  }
//  // Metodo per eliminare un prodotto
//  deleteProduct(id: string): Observable<any> {
//    return this.http.delete<any>(`${this.backendUrl}/delete/${id}`);
//  }
//  // Metodo per cercare prodotti per nome
//  searchProductsByName(name: string): Observable<any> {
//    return this.http.get<any>(
//      `${this.backendUrl}/cerca-by-nome/name?nome=${name}`
//    );
//  }
//
//  // // Metodo per caricare un'immagine per un prodotto
//  // uploadProductImage(prodotto: ProdottoDTO): Observable<IProdotto> {
//  //   let prodottoid = this.getProddottoid();
//  //   const upload = { immagini: prodotto.immagini };
//  //   return this.http.patch<any>(
//  //     `${this.backendUrl}/upload/${prodottoid}`,
//  //     upload
//  //   );
//  // }
//  uploadProductImage(prodotto: ProdottoDTO): Observable<IProdotto> {
//    let prodottoid = this.getProddottoid();
//    const formData = new FormData();
//    if (prodotto.immagini && prodotto.immagini.length > 0) {
//      const imagePath = prodotto.immagini[0]; // Seleziona il primo percorso dell'immagine dall'array
//      formData.append('upload', imagePath);
//    }
//    // Aggiungi il file come parametro 'upload'
//    return this.http.patch<IProdotto>(
//      `${this.backendUrl}/upload/${prodottoid}`,
//      formData
//    );
//  }
//}
//
