import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ModalidadItem {
  imagen: string;
  titulo: string;
  colorTexto: string;
  colorFondo: string;
  btnColor: string;
  btnColorTexto: string;
  btnTexto: string;
  enlace: string;
}

@Component({
  selector: 'app-modalidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modalidades.html',
  styleUrls: ['./modalidades.css']
})
export class Modalidades implements OnInit {

  @Input() props: {
    titulo: string;
    subtitulo: string;
    detalle: string;
    modalidades: ModalidadItem[];
  } = {
    titulo: 'SELECCIONA UNA MODALIDAD:',
    subtitulo: 'CURSOS 2027A',
    detalle: 'Examen Admisión UDG: NOVIEMBRE 2026',
    modalidades: []
  };

  ngOnInit() {
    if (!this.props.modalidades || this.props.modalidades.length === 0) {
      this.props = {
        titulo: this.props.titulo || 'SELECCIONA UNA MODALIDAD:',
        subtitulo: this.props.subtitulo || 'CURSOS 2027A',
        detalle: this.props.detalle || 'Examen Admisión UDG: NOVIEMBRE 2026',
        modalidades: [
          {
            imagen: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%231e293b" class="bi bi-easel" viewBox="0 0 16 16"><path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0M2 3v7h12V3z"/></svg>',
            titulo: 'Modalidad Presencial',
            colorTexto: '#07004d',
            colorFondo: '#93c5fd',
            btnColor: '#fb923c',
            btnColorTexto: '#ffffff',
            btnTexto: 'MÁS INFORMACIÓN',
            enlace: '#'
          },
          {
            imagen: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%231e293b" class="bi bi-camera-video" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 2 2v3.06l2.67-1.6a1 1 0 0 1 1.485.867v4.347a1 1 0 0 1-1.485.867L11.5 10.94V11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.16 2.5 1.5V5.34l-2.5 1.5zm-1.5-5.16H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"/></svg>',
            titulo: 'Modalidad Vía ZOOM',
            colorTexto: '#07004d',
            colorFondo: '#fcd34d',
            btnColor: '#fb923c',
            btnColorTexto: '#ffffff',
            btnTexto: 'MÁS INFORMACIÓN',
            enlace: '#'
          },
          {
            imagen: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%231e293b" class="bi bi-laptop" viewBox="0 0 16 16"><path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/></svg>',
            titulo: 'Modalidad a tu Ritmo',
            colorTexto: '#07004d',
            colorFondo: '#e9d5ff',
            btnColor: '#fb923c',
            btnColorTexto: '#ffffff',
            btnTexto: 'MÁS INFORMACIÓN',
            enlace: '#'
          }
        ]
      };
    }
  }
}
