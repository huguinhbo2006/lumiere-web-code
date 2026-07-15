import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias.html',
  styleUrls: ['./categorias.css']
})
export class Categorias implements OnInit {

  @Input() props: {
    titulo: string;
    cuadros: { imagen: string; tipoEnlace?: string; enlace?: string }[];
  } = {
    titulo: 'CONOCE NUESTROS CURSOS',
    cuadros: []
  };

  ngOnInit() {
    if (!this.props.cuadros || this.props.cuadros.length === 0) {
      this.props = {
        titulo: this.props.titulo || 'CONOCE NUESTROS CURSOS',
        cuadros: [
          { imagen: 'https://picsum.photos/250/80?random=1', tipoEnlace: 'externa', enlace: '' },
          { imagen: 'https://picsum.photos/250/80?random=2', tipoEnlace: 'externa', enlace: '' }
        ]
      };
    }
  }
}
