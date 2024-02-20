import { Routes } from '@angular/router';
import { AccueilComposantComponent } from './components/accueil-composant/accueil-composant.component';
import { PlayersComponent } from './players/players.component';

export const routes: Routes = [

{
    path : '',
    component : AccueilComposantComponent
}
,
{
    path : 'players-component',
    component : PlayersComponent
}

];
