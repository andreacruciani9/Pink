import { Ordini } from './i-ordini';
import { IProdotto } from './i-prodotto';
import { iUtente } from './i-utente';

// Carello interface
export interface Carello {
  id: string;
  importo_totale: number;
  prodotti: IProdotto[]; // Assumendo che Prodotto sia un'array di oggetti definiti
  utente: iUtente; // Assumendo che Utente sia un'interfaccia definita
  ordine: Ordini; // Assumendo che Ordini sia un'interfaccia definita
}

// CarelloDTO interface
export interface CarelloDTO {
  importo_totale: number;
  prodotti: IProdotto[]; // Assumendo che Prodotto sia un'array di oggetti definiti
  ordine: Ordini; // Assumendo che Ordini sia un'interfaccia definita
  utente: iUtente; // Assumendo che Utente sia un'interfaccia definita
}

// Definisci le interfacce Prodotto, Utente e Ordini se non sono già definite
// Assumi che siano definite separatamente in base alle esigenze del progetto.
