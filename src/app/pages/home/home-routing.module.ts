import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndirizzoComponent } from '../auth/indirizzo/indirizzo.component';
import { CreaProdottoComponent } from './crea-prodotto/crea-prodotto.component';
import { ScontoComponent } from '../menu/sconto/sconto.component';
import { VisualizzaProdottiComponent } from './visualizza prodotti/visualizza-prodotti.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crea-prodotto', component: CreaProdottoComponent },
  { path: 'visualizza-prodotti', component: VisualizzaProdottiComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
