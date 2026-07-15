import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  imports: [],
  templateUrl: './whatsapp.html',
  styleUrl: './whatsapp.css',
})
export class Whatsapp {
  @Input({ required: true }) phone!: string;

  openWhatsApp() {
    if (!this.phone) return;
    window.open(`https://wa.me/${this.phone}`, '_blank');
  }
}
