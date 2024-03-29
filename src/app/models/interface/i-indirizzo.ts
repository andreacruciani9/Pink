import { iUtente } from './i-utente';

export interface iIndirizzo {
  id: string;
  cap: string;
  civico: string;
  localita: string;
  via: string;
  utente: iUtente;
}
type IndirizzoOmit = Omit<iIndirizzo, 'utente' | 'id'>;

export type IndirizzoDTO = IndirizzoOmit;
