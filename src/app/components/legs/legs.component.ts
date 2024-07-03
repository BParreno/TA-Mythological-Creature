import { Component } from '@angular/core';
import { KneesComponent } from '../knees/knees.component';

@Component({
  selector: 'app-legs',
  standalone: true,
  imports: [KneesComponent],
  templateUrl: './legs.component.html',
  styleUrl: './legs.component.css'
})
export class LegsComponent {

}
