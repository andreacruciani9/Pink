import { Type } from '@angular/core';
import { Ordini } from './i-ordini';
import { Recensioni } from './i-recensioni';
import { ISconto } from './i-sconto';

export interface IProdotto {
  id: string;
  name: string;
  descrizione: string;
  prezzo: number;
  immagini: string[];
  quantita: number;
  tipoCategorie: string[];
  ordini: Ordini; // Assumendo che Ordini sia un'interfaccia definita
  recensione: Recensioni[]; // Assumendo che Recensioni sia un'array di oggetti definiti
  sconto: ISconto;
}

export interface ProdottoDTO {
  name: string;
  descrizione: string;
  prezzo: number;
  immagini: string[] | null;
  quantita: number;
  tipoCategorie: string[];
}
export interface IProdottoResponse {
  content: IProdotto[];
}
