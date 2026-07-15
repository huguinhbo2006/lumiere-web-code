import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-admitidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-admitidos.html',
  styleUrls: ['./tabla-admitidos.css']
})
export class TablaAdmitidos implements OnInit {
  @Input() props!: {
    titulo: string;
    filas: {
      alumno: string;
      puntaje: string;
      carrera: string;
      curso: string;
      calendario: string;
    }[];
  };

  ngOnInit() {
    if (!this.props) {
      this.props = {
        titulo: 'Lista de Admitidos a UdeG',
        filas: []
      };
    }
    if (!this.props.filas || this.props.filas.length === 0) {
      this.props.filas = this.getDefaultFilas();
    }
  }

  private getDefaultFilas() {
    return [
      {
        alumno: 'Andrea Cárdenas Allec',
        puntaje: '189.97',
        carrera: 'Médico Cirujano y Partero',
        curso: 'Maestro plus',
        calendario: '2026A'
      },
      {
        alumno: 'Cristopher Aaron Dominguez Mora',
        puntaje: '189.97',
        carrera: 'Médico Cirujano y Partero',
        indigo: 'Maestro',
        curso: 'Maestro',
        calendario: '2026A'
      },
      {
        alumno: 'Diana Jacqueline Mercado Arvizu',
        puntaje: '189.84',
        carrera: 'Médico Cirujano y Partero',
        curso: 'Maestro plus',
        calendario: '2026A'
      },
      {
        alumno: 'Gladys Ordaz Mendoza',
        puntaje: '189.77',
        carrera: 'Médico Cirujano y Partero',
        curso: 'Alto Rendimiento',
        calendario: '2026A'
      },
      {
        alumno: 'Eduardo Verduzco Aslan',
        puntaje: '189.72',
        carrera: 'Médico Cirujano y Partero',
        curso: 'Especial Altos Puntajes',
        calendario: '2026A'
      },
      {
        alumno: 'Juan Guillermo Amador Prado',
        puntaje: '189.72',
        carrera: 'Médico Cirujano y Partero',
        curso: 'Maestro',
        calendario: '2026A'
      },
      {
        alumno: 'Fátima Nuñez Flores',
        puntaje: '189.66',
        carrera: 'Médico Cirujano y Partero',
        curso: 'Maestro Virtual en Vivo',
        calendario: '2026A'
      },
      {
        alumno: 'Saharaim Cordero García',
        puntaje: '189.60',
        carrera: 'Médico Cirujano y Partero',
        curso: 'Ingresa a la Universidad',
        calendario: '2026A'
      },
      {
        alumno: 'Luis Fernando Caudillo Cerrillos',
        puntaje: '189.59',
        carrera: 'Médico Cirujano y Partero',
        curso: 'Maestro plus',
        calendario: '2026A'
      },
      {
        alumno: 'Pilar Guadalupe Figueroa González',
        puntaje: '189.37',
        carrera: 'Médico Cirujano y Partero',
        curso: 'Maestro plus',
        calendario: '2026A'
      }
    ];
  }
}
