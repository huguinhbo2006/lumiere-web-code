import { Component, Input, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Curso } from '../curso/curso';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, Curso],
  templateUrl: './cursos.html',
  styleUrls: ['./cursos.css']
})
export class Cursos implements OnInit {

  @Input() props!: {
    cursos: any[];
  };

  currentIndex = 0;
  itemsPerPage = 4;

  ngOnInit() {
    this.updateItemsPerPage();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateItemsPerPage();
  }

  updateItemsPerPage() {
    if (typeof window !== 'undefined') {
      this.itemsPerPage = window.innerWidth <= 768 ? 1 : 4;
    }
  }

  get maxIndex(): number {
    if (!this.props?.cursos) return 0;
    return Math.max(0, this.props.cursos.length - this.itemsPerPage);
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.maxIndex; // vuelve al final
    }
  }

  nextSlide() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // vuelve al inicio
    }
  }
}
