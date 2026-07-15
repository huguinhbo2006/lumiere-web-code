import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profesores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profesores.html',
  styleUrls: ['./profesores.css']
})
export class Profesores {

  @Input() props!: {
    profesores: {
      nombre: string;
      especialidad: string;
      foto: string;
    }[];
  };

}
