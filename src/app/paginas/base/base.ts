import { Component, Input } from '@angular/core';
import { Menu } from "../../componentes/menu/menu";
import { Banner } from "../../componentes/banner/banner";
import { Mensaje } from "../../componentes/mensaje/mensaje";
import { Numeros } from "../../componentes/numeros/numeros";
import { Profesores } from "../../componentes/profesores/profesores";
import { FotoPlanteles } from "../../componentes/foto-planteles/foto-planteles";
import { Whatsapp } from "../../componentes/whatsapp/whatsapp";
import { Testimonios } from "../../componentes/testimonios/testimonios";
import { Cursos } from "../../componentes/cursos/cursos";
import { Chat } from "../../componentes/chat/chat";
import { Curso } from "../../componentes/curso/curso";
import { DatosPlanteles } from "../../componentes/datos-planteles/datos-planteles";
import { FAQ } from "../../componentes/faq/faq";
import { VideoTexto } from "../../componentes/video-texto/video-texto";
import { Categorias } from "../../componentes/categorias/categorias";
import { ExperienciaEvento } from "../../componentes/experiencia-evento/experiencia-evento";
import { GaleriaCarrusel } from "../../componentes/galeria-carrusel/galeria-carrusel";
import { Minibanner } from "../../componentes/minibanner/minibanner";
import { Modalidades } from "../../componentes/modalidades/modalidades";
import { Streaming } from "../../componentes/streaming/streaming";
import { TablaAdmitidos } from "../../componentes/tabla-admitidos/tabla-admitidos";
import { KommoForm } from "../../componentes/kommo-form/kommo-form";
import { Builder } from '../../servicios/builder';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base',
  imports: [
    Menu,
    Banner,
    Mensaje,
    Numeros,
    Profesores,
    FotoPlanteles,
    Whatsapp,
    Testimonios,
    Cursos,
    Chat,
    Curso,
    DatosPlanteles,
    FAQ,
    VideoTexto,
    Categorias,
    ExperienciaEvento,
    GaleriaCarrusel,
    Minibanner,
    Modalidades,
    Streaming,
    TablaAdmitidos,
    KommoForm,
    CommonModule
  ],
  templateUrl: './base.html',
  styleUrl: './base.css',
})
export class Base {
  @Input() id = '215b86d9-b308-43f5-b649-d8d234580607';
  elements: any[] = []; // 🔥 inicializado
    
  constructor(private servicio: Builder) {}

  ngOnInit() {
    this.contenido();
  }

  contenido() {
    this.servicio
      .contenido({ id: this.id })
      .subscribe({
        next: (res: any) => {
          this.elements = res?.content?.elements || [];
        },
        error: (err) => {
          console.error('Error cargando contenido', err);
        }
      });
  }
}
