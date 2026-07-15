import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencia-evento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia-evento.html',
  styleUrls: ['./experiencia-evento.css']
})
export class ExperienciaEvento implements OnInit {

  @Input() props!: {
    titulo: string;
    subtitulo: string;
    cards: {
      titulo: string;
      descripcion: string;
      imagen: string;
    }[];
  };

  ngOnInit() {
    if (!this.props) {
      this.props = {
        titulo: 'Experiencia Lumiere',
        subtitulo: 'Conoce más sobre nuestros eventos y experiencias',
        cards: []
      };
    }
  }
}
