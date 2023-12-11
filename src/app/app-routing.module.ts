import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProduitsComponent } from './produits/produits.component';
import { OpinionComponent } from './opinion/opinion.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'inscription', component: InscriptionComponent },
  {path: 'connexion', component: ConnexionComponent },
  {path: 'produits', component: ProduitsComponent },
  {path: 'Opinion', component: OpinionComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
