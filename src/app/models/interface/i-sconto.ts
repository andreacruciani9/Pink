import { IProdotto } from './i-prodotto';
import { iUtente } from './i-utente';

// Sconto interface
export interface ISconto {
  code: string;
  importoSconto: number;
  percentuale: number;
  utente: iUtente; // Assumendo che Utente sia un'interfaccia definita
  prodotto: IProdotto; // Assumendo che Prodotto sia un'interfaccia definita
}

// ScontoDTO interface
export interface ScontoDTO {
  code: string;
  importoSconto: number;
  percentuale: number;
  prodotto?: IProdotto; // Assumendo che Prodotto sia un'interfaccia definita
}

// Assicurati di definire anche le interfacce Prodotto e Utente se non sono già definite
// Assumi che siano definite separatamente in base alle esigenze del progetto.
