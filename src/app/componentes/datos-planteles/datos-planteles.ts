import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-datos-planteles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datos-planteles.html',
  styleUrls: ['./datos-planteles.css'],
})
export class DatosPlanteles implements OnInit {

  @Input() props: any;

  planteles: any[] = [
    {
      nombre: 'Plantel Centro',
      color: '#62A8FF',
      mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5312386927376!2d-99.1678128!3d19.4326077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMTAnMDQuMSJX!5e0!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx',
      telefono: '555-123-4567',
      celular: '55-7777-8888',
      whatsapp: 'https://wa.me/5277778888'
    },
    {
      nombre: 'Plantel Norte',
      color: '#8AD6A5',
      mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.5312386927376!2d-99.1678128!3d19.4526077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMTAnMDQuMSJX!5e0!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx',
      telefono: '556-222-3333',
      celular: '55-9999-0000',
      whatsapp: 'https://wa.me/5299990000'
    },
    {
      nombre: 'Plantel Sur',
      color: '#FFB870',
      mapaUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5312386927376!2d-99.1678128!3d19.4126077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMTAnMDQuMSJX!5e0!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx',
      telefono: '557-444-5555',
      celular: '55-1111-2222',
      whatsapp: 'https://wa.me/5211112222'
    }
  ];

  seleccionado: any;
  mapaUrlSanitizado: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.props && this.props.planteles) {
      this.planteles = this.props.planteles;
    } else if (this.props && Array.isArray(this.props)) {
      this.planteles = this.props;
    }
    this.seleccionado = this.planteles[0];
    this.actualizarMapa();
  }

  seleccionarPlantel(i: number) {
    this.seleccionado = this.planteles[i];
    this.actualizarMapa();

    // Activar animación de fade-slide
    const card = document.querySelector('.card-plantel') as HTMLElement;
    if (card) {
      card.classList.remove('animar');
      void card.offsetWidth; // fuerza reflow
      card.classList.add('animar');
    }
  }

  actualizarMapa() {
    if (this.seleccionado && this.seleccionado.mapaUrl) {
      this.mapaUrlSanitizado = this.sanitizer.bypassSecurityTrustResourceUrl(this.seleccionado.mapaUrl);
    } else {
      this.mapaUrlSanitizado = null;
    }
  }
}
