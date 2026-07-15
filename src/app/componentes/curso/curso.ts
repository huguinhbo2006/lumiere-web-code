import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CursoProps {
  id?: number | string;
  idAltacurso?: string;
  titulo: string;
  imagen: string;
  modalidad: string;
  duracion?: string;
  duracionSemanas?: number;
  descuento?: number;
  precio: number;
  precioLista?: number;
  precioPromo: number;
  ahorro: number;
  semanas?: number;
  limiteLiquidar: string;
  textoLiquidar: string;
  textoMeses: string;
  horas?: number;
  simulacros?: string;
  inicio?: string;
  termina?: string;
  apartado?: number;
}

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curso.html',
  styleUrls: ['./curso.css']
})
export class Curso {
  // Datos dinámicos usando Angular 17+ signal inputs
  data = input.required<CursoProps>();
}
