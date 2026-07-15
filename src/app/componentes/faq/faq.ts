import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrls: ['./faq.css'],
})
export class FAQ implements OnInit {

  @Input() props: any;

  faqs = [
    {
      pregunta: "¿Qué horarios manejan?",
      respuesta: "Nuestros horarios son de lunes a viernes de 8:00 AM a 6:00 PM."
    },
    {
      pregunta: "¿Cómo puedo inscribirme?",
      respuesta: "Puedes inscribirte en línea o directamente en cualquiera de nuestros planteles."
    },
    {
      pregunta: "¿Ofrecen becas?",
      respuesta: "Sí, contamos con becas académicas y apoyos económicos según el perfil del estudiante."
    },
    {
      pregunta: "¿Aceptan pagos con tarjeta?",
      respuesta: "Claro, aceptamos tarjetas de crédito y débito, así como pagos digitales."
    }
  ];

  ngOnInit() {
    if (this.props && this.props.faqs) {
      this.faqs = this.props.faqs;
    } else if (this.props && Array.isArray(this.props)) {
      this.faqs = this.props;
    }
  }

  abierto: number | null = null;

  toggle(i: number) {
    this.abierto = this.abierto === i ? null : i;
  }

}
