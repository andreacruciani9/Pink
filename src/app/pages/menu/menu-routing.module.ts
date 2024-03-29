import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { ScontoComponent } from './sconto/sconto.component';
import { VisualizzaProdottiComponent } from '../home/visualizza prodotti/visualizza-prodotti.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'sconto', component: ScontoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
