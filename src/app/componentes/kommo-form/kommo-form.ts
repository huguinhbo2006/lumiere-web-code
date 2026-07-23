import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-kommo-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kommo-form.html',
  styleUrl: './kommo-form.css'
})
export class KommoForm implements OnChanges {

  @Input() props: { url: string; altura: number } = { url: '', altura: 600 };

  private sanitizer = inject(DomSanitizer);

  iframeSrc: SafeResourceUrl | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['props'] && this.props?.url?.trim()) {
      this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.props.url);
    }
  }
}
