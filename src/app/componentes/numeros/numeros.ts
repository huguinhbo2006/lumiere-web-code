import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-numeros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './numeros.html',
  styleUrls: ['./numeros.css']
})
export class Numeros {

  @Input() props!: {
    titulo: string;
    subtitulo: string;
    stats: {
      texto: string;
      tipo: 'graduados' | 'alumnos' | 'anios';
      valor: string;
    }[];
  };

  /** Extrae solo el número del valor (para calendario) */
  soloNumero(valor: string): string {
    const match = valor.match(/\d+/g);
    return match ? match.join('') : '';
  }
}
