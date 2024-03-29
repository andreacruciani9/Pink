import { Component } from '@angular/core';
import { ScontoService } from '../../../service/sconto.service';
import { ScontoDTO } from '../../../models/interface/i-sconto';

@Component({
  selector: 'app-sconto',
  templateUrl: './sconto.component.html',
  styleUrl: './sconto.component.scss',
})
export class ScontoComponent {
  sconto: ScontoDTO = {
    code: '',
    importoSconto: 0,
    percentuale: 0,
  };

  constructor(private scontoService: ScontoService) {}

  onSubmit() {
    const prodottoId = localStorage.getItem('prodottoId');
    if (prodottoId) {
      this.scontoService.createSconto(this.sconto, prodottoId).subscribe({
        next: (response) => console.log('Sconto creato con successo', response),
        error: (error) =>
          console.error('Errore nella creazione del sconto', error),
      });
    } else {
      console.error('ID prodotto non trovato');
    }
  }
}
