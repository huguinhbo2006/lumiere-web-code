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
    mostrarRedes?: boolean;
    profesores: {
      nombre: string;
      especialidad: string;
      descripcion: string;
      foto: string;
      tiktok?: string;
      instagram?: string;
      facebook?: string;
      youtube?: string;
    }[];
  };

  // Detalle modal
  detalleOpen = false;
  detalleProfesor: any = null;

  abrirModalDetalle(profesor: any) {
    this.detalleProfesor = profesor;
    this.detalleOpen = true;
  }

  cerrarModalDetalle() {
    this.detalleOpen = false;
    this.detalleProfesor = null;
  }

}
