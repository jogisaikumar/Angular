import { Component } from '@angular/core';
import { AlienHero } from '../alien-hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alien-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alien-hero.component.html',
  styleUrl: './alien-hero.component.css'
})
export class AlienHeroComponent {
  skills = ['Strike HeatBalls ', 'Freezing the Enemies', 'Light Speed', 'Dianosaur Punch Power']

  model = new AlienHero(1, 'Swarm Fire', this.skills[0], 'Marvel');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  newAlienHero() {
    this.model = new AlienHero(11, '', this.skills[3], '');
  }


}
