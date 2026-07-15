import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './banner.html',
  styleUrls: ['./banner.css']
})
export class Banner implements OnInit {

  @Input() images: string[] = [];

  currentIndex = 0;
  flash = false;
  intervalId: any;

  ngOnInit() {
    this.iniciarSlider();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  iniciarSlider() {
    this.intervalId = setInterval(() => {
      if (this.images.length > 1) {
        this.triggerFlash();
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }
    }, 5000);
  }

  triggerFlash() {
    this.flash = true;
    setTimeout(() => (this.flash = false), 250);
  }
}
