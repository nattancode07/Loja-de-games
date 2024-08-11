
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.component.html',
  styleUrl: 'inicio.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatGridListModule]
})
export class InicioComponent {}
