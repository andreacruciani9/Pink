import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { ScontoComponent } from './sconto/sconto.component';
import { FormsModule } from '@angular/forms';
import { VisualizzaProdottiComponent } from '../home/visualizza prodotti/visualizza-prodotti.component';

@NgModule({
  declarations: [MenuComponent, ScontoComponent, VisualizzaProdottiComponent],
  imports: [CommonModule, MenuRoutingModule, FormsModule],
})
export class MenuModule {}
