import { Component } from '@angular/core';
import { WingsComponent } from '../wings/wings.component';

@Component({
  selector: 'app-chest',
  standalone: true,
  imports: [WingsComponent],
  templateUrl: './chest.component.html',
  styleUrl: './chest.component.css'
})
export class ChestComponent {

}
