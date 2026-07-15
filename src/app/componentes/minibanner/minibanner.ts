import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-minibanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minibanner.html',
  styleUrls: ['./minibanner.css']
})
export class Minibanner implements OnInit {

  @Input() props: {
    imagen: string;
  } = {
    imagen: ''
  };

  ngOnInit() {
    if (!this.props.imagen) {
      this.props = {
        imagen: 'https://picsum.photos/1200/100?random=1'
      };
    }
  }
}
