import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Curso } from '../curso/curso';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, Curso],
  templateUrl: './cursos.html',
  styleUrls: ['./cursos.css']
})
export class Cursos {

  @Input() props!: {
    cursos: any[];
  };

}
