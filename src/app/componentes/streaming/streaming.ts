import { 
  Component, 
  Input, 
  ViewChild, 
  ElementRef, 
  AfterViewInit, 
  OnDestroy, 
  ViewEncapsulation,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import videojs from 'video.js';

@Component({
  selector: 'app-streaming',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './streaming.html',
  styleUrl: './streaming.css',
  encapsulation: ViewEncapsulation.None
})
export class Streaming implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  
  @Input() props: any;

  @ViewChild('videoTarget') videoTarget!: ElementRef;
  
  player?: ReturnType<typeof videojs>;

  ngOnInit() {
    if (!this.props) {
      this.props = { url: '' };
    }
  }

  ngAfterViewInit() {
    this.initPlayer();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['props'] && !changes['props'].firstChange) {
      this.updateUrl(this.props?.url);
    }
  }

  private initPlayer() {
    if (!this.videoTarget) return;

    const options = {
      autoplay: false,
      controls: true,
      responsive: true,
      fluid: true,
      preload: 'auto',
      sources: [{
        src: this.props?.url || '',
        type: this.getStreamType(this.props?.url)
      }]
    };

    this.player = videojs(this.videoTarget.nativeElement, options, () => {
      console.log('Video.js Player Inicializado en el Visor');
    });
  }

  updateUrl(newUrl: string) {
    if (this.player) {
      this.player.src({
        src: newUrl || '',
        type: this.getStreamType(newUrl)
      });
      this.player.load();
    }
  }

  private getStreamType(url: string): string {
    if (!url) return 'video/mp4';
    return url.includes('.m3u8') ? 'application/x-mpegURL' : 'video/mp4';
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
