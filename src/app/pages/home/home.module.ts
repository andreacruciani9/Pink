import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CreaProdottoComponent } from './crea-prodotto/crea-prodotto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { VisualizzaProdottiComponent } from './visualizza prodotti/visualizza-prodotti.component';
//import { CreaProdottiComponent } from './crea-prodotti/crea-prodotti.component';
//import { VisualizzaProdottiComponent } from './visualizza-prodotti/visualizza-prodotti.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreaProdottoComponent,
    DashboardComponent,
    // CreaProdottiComponent,

    //VisualizzaProdottiComponent
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
})
export class HomeModule {}
