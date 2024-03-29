import { Component, OnInit } from '@angular/core';
import {
  IndirizzoDTO,
  iIndirizzo,
} from '../../../models/interface/i-indirizzo';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { IndirizoSvcService } from '../../../service/indirizo-svc.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-indirizzo',
  templateUrl: './indirizzo.component.html',
  styleUrl: './indirizzo.component.scss',
})
export class IndirizzoComponent {
  indirizzo!: IndirizzoDTO;
  isLoading = false;
  savedSuccessfully = false;

  constructor(
    private indirizzoService: IndirizoSvcService,
    private router: Router
  ) {}

  registra(form: NgForm) {
    try {
      this.indirizzo = {
        cap: form.value.cap,
        civico: form.value.civico,
        localita: form.value.localita,
        via: form.value.via,
        // Altri campi dell'indirizzo...
      };

      this.indirizzoService.setindirizzo(this.indirizzo).subscribe(
        () => {
          this.router.navigate(['../../menu']);
          this.isLoading = false;
        },
        (error: { error: string }) => {
          console.log('Indirizzo non impostato con successo:');
          this.isLoading = false;

          // Gestisci la risposta qui se necessario
        }
      );
    } catch (error) {
      console.log(error);
      this.isLoading = false;
    }
    this.savedSuccessfully = true; // Imposta savedSuccessfully a true
    this.router.navigate(['/']);
  }
}

//registra(form: NgForm) {
//  if (form.valid) {
//    this.isLoading = true;
//    this.indirizzo = {
//      cap: form.value.cap,
//      civico: form.value.civico,
//      localita: form.value.localita,
//      via: form.value.via,
//     // // Altri campi dell'indirizzo...
//    };
//
//    this.indirizzoService.setindirizzo(this.indirizzo).subscribe(
//      () => {
//        this.isLoading = false;
//        this.savedSuccessfully = true;
//        // Opzionale: reimposta il modulo
//        form.resetForm();
//      },
//      (error: any) => {
//        console.error("Errore durante la creazione dell'indirizzo:", error);
//        this.isLoading = false;
//        // Gestisci l'errore qui, ad esempio mostrando un messaggio all'utente
//      }
//    );
//  }
//}
//}
