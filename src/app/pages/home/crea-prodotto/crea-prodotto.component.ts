import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdottoDTO } from '../../../models/interface/i-prodotto';
import { ProdottoService } from '../../../service/prodotto.service';

@Component({
  selector: 'app-crea-prodotto',
  templateUrl: './crea-prodotto.component.html',
})
export class CreaProdottoComponent {
  prodotto: ProdottoDTO = {
    name: '',
    descrizione: '',
    prezzo: 0,
    immagini: [],
    quantita: 0,
    tipoCategorie: [],
  };
  fileToUpload: File | null = null;

  constructor(
    private prodottoService: ProdottoService,
    private router: Router
  ) {}

  // creaProdotto(form: NgForm) {
  //    if (!form.valid || !this.fileToUpload) {
  //      return;
  //    }
  //    this.prodottoService.creaProdotto(this.prodotto).subscribe({
  //      next: (prodottoCreato) => {
  //        console.log('Prodotto creato:', prodottoCreato);
  //        localStorage.setItem('prodottoId', prodottoCreato.id); // Salva l'ID per l'upload dell'immagine
  //        if (this.fileToUpload) {
  //           this.prodottoService
  //            .uploadImmagineProdotto(prodottoCreato.id, this.fileToUpload)
  //            .subscribe({
  //              next: (response) => {
  //                console.log('Immagine caricata con successo', response);
  //                this.router.navigate(['../../menu/sconto']); // Modifica per indirizzare dove preferisci dopo il caricamento
  //              },
  //              error: (error) =>
  //                console.error(
  //                  "Errore durante il caricamento dell'immagine",
  //                  error
  //                ),
  //            });
  //        }
  //      },
  //      error: (error) =>
  //        console.error('Errore durante la creazione del prodotto', error),
  //    });
  //}
  creaProdotto(form: NgForm) {
    if (!form.valid || !this.fileToUpload) {
      console.error('Form non valido o file mancante');
      return;
    }
    this.prodottoService.creaProdotto(this.prodotto).subscribe({
      next: (prodottoCreato) => {
        console.log('Prodotto creato:', prodottoCreato);
        // L'ID del prodotto è già salvato nel localStorage dal service
        if (this.fileToUpload) {
          this.prodottoService
            .uploadImmagineProdotto(prodottoCreato.id, this.fileToUpload)
            .subscribe({
              next: (response) => {
                console.log('Immagine caricata con successo', response);
                this.router.navigate(['../../menu/sconto']); // Modifica per indirizzare dove preferisci dopo il caricamento
              },
              error: (error) =>
                console.error(
                  "Errore durante il caricamento dell'immagine",
                  error
                ),
            });
        }
      },
      error: (error) =>
        console.error('Errore durante la creazione del prodotto', error),
    });
  }

  caricaImmagine(event: Event) {
    const element = event.target as HTMLInputElement;
    if (element.files?.length) {
      this.fileToUpload = element.files[0];
    }
  }
}

//mport { Component } from '@angular/core';
//mport { ProdottoService } from '../../../service/prodotto.service';
//mport { ProdottoDTO } from '../../../models/interface/i-prodotto';
//
//Component({
// selector: 'app-prodotto',
// templateUrl: './prodotto.component.html',
// styleUrls: ['./prodotto.component.scss']
//)
//xport class ProdottoComponent {
// prodotto: ProdottoDTO = new ProdottoDTO(); // Inizializza il tuo DTO come necessario
// constructor(private prodottoService: ProdottoService) {}
//
// addProdotto() {
//   this.prodottoService.addProdotto(this.prodotto).subscribe({
//     next: (response) => {
//       console.log('Prodotto aggiunto con successo', response);
//       localStorage.setItem('prodottoId', response.id); // Salva l'ID del prodotto se necessario
//     },
//     error: (error) => console.error('Si è verificato un errore', error)
//   });
// }
//
// updateProdotto(id: string) {
//   this.prodottoService.updateProdotto(id, this.prodotto).subscribe({
//     next: (response) => {
//       console.log('Prodotto aggiornato con successo', response);
//       // Puoi aggiungere qui altre operazioni dopo l'aggiornamento
//     },
//     error: (error) => console.error('Si è verificato un errore durante l\'aggiornamento del prodotto', error)
//   });
// }
//
// deleteProdotto(id: string) {
//   this.prodottoService.deleteProdotto(id).subscribe({
//     next: () => {
//       console.log('Prodotto eliminato con successo');
//       // Puoi aggiungere qui altre operazioni dopo l'eliminazione
//     },
//     error: (error) => console.error('Si è verificato un errore durante l\'eliminazione del prodotto', error)
//   });
// }
//
// caricaImmagine(id: string, event: any) {
//   const file: File = event.target.files[0];
//   if (file) {
//     this.prodottoService.uploadImmagine(id, file).subscribe({
//       next: (response) => {
//         console.log('Immagine caricata con successo', response);
//         // Aggiorna il prodotto o l'UI come necessario
//       },
//       error: (error) => console.error('Si è verificato un errore durante il caricamento dell\'immagine', error)
//     });
//   }
// }}

//import { error, log } from 'console';
//import { ProdottoService } from './../../../service/prodotto.service';
//import { Component } from '@angular/core';
//import { ProdottoDTO } from '../../../models/interface/i-prodotto';
//import { NgForm } from '@angular/forms';
//import { Router } from '@angular/router';
//
//@Component({
//  selector: 'app-crea-prodotto',
//  templateUrl: './crea-prodotto.component.html',
//  styleUrl: './crea-prodotto.component.scss',
//})
//export class CreaProdottoComponent {
//  prodotto!: ProdottoDTO;
//  isLoading = false;
//  constructor(private prodottosvc: ProdottoService, private router: Router) {}
//  registra(form: NgForm) {
//    try {
//      this.prodotto = {
//        name: form.value.name,
//        descrizione: form.value.descrizione,
//        prezzo: form.value.prezzo,
//        immagini: form.value.immagini,
//        quantita: form.value.quantita,
//        tipoCategorie: form.value.categorie,
//      };
//      console.log(this.prodotto);
//
//      this.prodottosvc.addProduct(this.prodotto).subscribe(
//        () => {
//          this.router.navigate(['../../home']);
//          this.isLoading = false;
//        },
//        (error: { error: string }) => {
//          console.log('prodotto non impostato con successo');
//          this.isLoading = false;
//        }
//      );
//    } catch (error) {
//      console.log(error);
//      9;
//      this.isLoading = false;
//    }
//  }
//  caricaimmagine(event: any) {
//    const files = event.target.files;
//    if (files && files.length > 0) {
//      const fileToUpload = files[0];
//      this.isLoading = true;
//
//      this.prodottosvc.uploadProductImage(fileToUpload).subscribe(
//        () => {
//          this.isLoading = false;
//        },
//        (error: { error: string }) => {
//          console.log('immagine non impostata con successo');
//          this.isLoading = false;
//        }
//      );
//    }
//  }
//}
