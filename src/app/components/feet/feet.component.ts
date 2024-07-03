import { Component } from '@angular/core';
import { FingersComponent } from '../fingers/fingers.component';

@Component({
  selector: 'app-feet',
  standalone: true,
  imports: [FingersComponent],
  templateUrl: './feet.component.html',
  styleUrl: './feet.component.css'
})
export class FeetComponent {

}
