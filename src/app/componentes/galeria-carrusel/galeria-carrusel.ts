import { Component, Input, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-galeria-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria-carrusel.html',
  styleUrls: ['./galeria-carrusel.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GaleriaCarrusel implements OnInit {
  @Input() props!: {
    titulo: string;
    items: {
      nombre: string;
      ubicacion: string;
      avatar: string;
      imagen: string;
      liked?: boolean;
      bookmarked?: boolean;
    }[];
  };

  ngOnInit() {
    if (!this.props) {
      this.props = {
        titulo: 'Galería de Experiencias',
        items: []
      };
    }
    if (!this.props.items || this.props.items.length === 0) {
      this.props.items = this.getDefaultItems();
    }
  }

  toggleLike(item: any) {
    item.liked = !item.liked;
  }

  toggleBookmark(item: any) {
    item.bookmarked = !item.bookmarked;
  }

  private getDefaultItems() {
    return [
      {
        nombre: 'Jesus Alanis',
        ubicacion: 'Zapopan, Jalisco',
        avatar: 'https://i.pravatar.cc/150?img=11',
        imagen: 'https://picsum.photos/500/500?random=81',
        liked: false,
        bookmarked: false
      },
      {
        nombre: 'Carlos Mendez',
        ubicacion: 'Zapopan, Jalisco',
        avatar: 'https://i.pravatar.cc/150?img=12',
        imagen: 'https://picsum.photos/500/500?random=82',
        liked: true,
        bookmarked: false
      },
      {
        nombre: 'Graciela Perez',
        ubicacion: 'Zapopan, Jalisco',
        avatar: 'https://i.pravatar.cc/150?img=14',
        imagen: 'https://picsum.photos/500/500?random=83',
        liked: false,
        bookmarked: true
      },
      {
        nombre: 'Carlos Zamora',
        ubicacion: 'Guadalajara, Jalisco',
        avatar: 'https://i.pravatar.cc/150?img=15',
        imagen: 'https://picsum.photos/500/500?random=84',
        liked: false,
        bookmarked: false
      }
    ];
  }
}
