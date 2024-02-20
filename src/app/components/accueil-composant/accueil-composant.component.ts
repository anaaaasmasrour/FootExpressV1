import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-accueil-composant',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterLinkActive,RouterOutlet],
  templateUrl: './accueil-composant.component.html',
  styleUrl: './accueil-composant.component.css'
})
export class AccueilComposantComponent {
  title = 'Accueil-app';
}
