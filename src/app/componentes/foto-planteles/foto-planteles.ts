import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-foto-planteles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foto-planteles.html',
  styleUrls: ['./foto-planteles.css']
})
export class FotoPlanteles implements OnInit, OnDestroy {

  @Input({ required: true }) images: string[] = [];

  currentIndex = 0;
  isFlashing = false;
  intervalId: any;

  ngOnInit() {
    this.startAutoCycle();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoCycle() {
    if (this.images.length <= 1) return;

    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  nextImage() {
    this.isFlashing = true;

    setTimeout(() => {
      this.isFlashing = false;
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 250);
  }

  selectImage(index: number) {
    this.currentIndex = index;
  }
}
