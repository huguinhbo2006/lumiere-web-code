import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mensaje.html',
  styleUrls: ['./mensaje.css']
})
export class Mensaje {

  @Input({ required: true }) texto!: string;

}
