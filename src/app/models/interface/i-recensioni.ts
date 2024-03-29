import { IProdotto } from './i-prodotto';
import { iUtente } from './i-utente';

// Recensioni interface
export interface Recensioni {
  id: string;
  commenti: string;
  data: string; // Assumendo che la data sia una stringa per facilitare la gestione
  valutazione: number;
  utente: iUtente; // Assumendo che Utente sia un'interfaccia definita
  prodotto: IProdotto; // Assumendo che Prodotto sia un'interfaccia definita
}

// RecensioniDTO interface
export interface RecensioniDTO {
  commenti: string;
  data: string; // Assumendo che la data sia una stringa per facilitare la gestione
  valutazione: number;
  idProdotto: string; // Assumendo che l'ID del prodotto sia una stringa UUID
}

// Assicurati di definire anche le interfacce Prodotto e Utente se non sono già definite
// Assumi che siano definite separatamente in base alle esigenze del progetto.
