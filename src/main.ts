import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { AppComponent } from './app/app.component';
import { AccueilComposantComponent } from './app/components/accueil-composant/accueil-composant.component';

bootstrapApplication(AccueilComposantComponent, appConfig)
  .catch((err) => console.error(err));
