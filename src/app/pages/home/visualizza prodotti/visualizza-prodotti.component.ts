import { Component, OnInit } from '@angular/core';
import { IProdotto } from '../../../models/interface/i-prodotto';
import { ProdottoService } from '../../../service/prodotto.service';

@Component({
  selector: 'app-visualizza-prodotti',
  templateUrl: './visualizza-prodotti.component.html',
  // styleUrls: ['./visualizza-prodotti.component.css'] // Assumi l'esistenza di CSS
})
export class VisualizzaProdottiComponent implements OnInit {
  prodotti: IProdotto[] = [];

  constructor(private prodottoService: ProdottoService) {}

  ngOnInit() {
    this.caricaProdotti();
  }

  caricaProdotti(): void {
    this.prodottoService.getAllProdotti().subscribe({
      next: (prodotti) => {
        this.prodotti = prodotti;
        console.log('-----', this.prodotti);
      },
      error: (err) =>
        console.error('Errore durante il recupero dei prodotti', err),
    });
  }

  eliminaProdotto(prodottoId: string) {
    this.prodottoService.eliminaProdotto(prodottoId).subscribe({
      next: () => {
        console.log('Prodotto eliminato con successo');
        this.caricaProdotti(); // Ricarica la lista dopo l'eliminazione
      },
      error: (err) => console.error(err),
    });
  }
}
