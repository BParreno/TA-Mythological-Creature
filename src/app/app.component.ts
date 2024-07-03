import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './components/head/head.component';
import { ChestComponent } from './components/chest/chest.component';
import { LegsComponent } from './components/legs/legs.component';
import { FeetComponent } from './components/feet/feet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadComponent, ChestComponent, LegsComponent, FeetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TA-Mythological-Creature';
}
