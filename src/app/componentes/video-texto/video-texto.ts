import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-texto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-texto.html',
  styleUrls: ['./video-texto.css']
})
export class VideoTexto implements OnInit, OnChanges {
  @Input() props!: {
    titulo: string;
    descripcion: string;
    youtubeUrl: string;
    videoDerecha: boolean;
    botonTexto?: string;
    botonEnlace?: string;
  };

  safeUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (!this.props) {
      this.props = this.getDefaultProps();
    }
    this.updateSafeUrl();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['props']) {
      this.updateSafeUrl();
    }
  }

  updateSafeUrl() {
    if (!this.props?.youtubeUrl) {
      this.safeUrl = null;
      return;
    }
    const url = this.props.youtubeUrl;
    let videoId = '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      videoId = match[2];
    } else {
      videoId = url;
    }
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  private getDefaultProps() {
    return {
      titulo: 'Título de la Sección',
      descripcion: 'Esta es una breve descripción del video donde puedes explicar de qué trata o agregar información complementaria relevante.',
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      videoDerecha: false,
      botonTexto: 'MÁS INFORMACIÓN',
      botonEnlace: ''
    };
  }
}
