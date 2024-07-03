import { Component } from '@angular/core';
import { EyesComponent } from '../eyes/eyes.component';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [EyesComponent],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {

}
