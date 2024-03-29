import { Carello } from './i-carrello';
import { IndirizzoDTO, iIndirizzo } from './i-indirizzo';
import { IProdotto, ProdottoDTO } from './i-prodotto';
import { UtenteDTO, iUtente } from './i-utente';
export interface Ordini {
  id: string;
  dataOrdine: Date;
  TotaleCosto: number;
  statoOrdine: string;
  utente: iUtente; // Assumendo che Utente sia un'interfaccia definita
  prodottiList: ProdottoDTO[]; // Assumendo che Prodotto sia un'array di oggetti definiti
  carello: Carello; // Assumendo che Carello sia un'interfaccia definita
  indirizzo: iIndirizzo; // Assumendo che Indirizzo sia un'interfaccia definita
}

// OrdiniDTO interface
export interface OrdiniDTO {
  dataOrdine: Date;
  TotaleCosto: number;
  statoOrdine: string;
  indirizzo: iIndirizzo; // Assumendo che Indirizzo sia un'interfaccia definita
  indirizzoid: string;
  prodottiList: IProdotto[]; // Assumendo che Prodotto sia un'array di oggetti definiti
  carello: Carello; // Assumendo che Carello sia un'interfaccia definita
}

// Definisci le interfacce Utente, Prodotto, Carello e Indirizzo se non sono già definite
// Assumi che siano definite separatamente in base alle esigenze del progetto.
