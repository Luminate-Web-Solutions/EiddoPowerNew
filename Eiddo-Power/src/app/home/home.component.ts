import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    this.handleVideoAutoplay();
  }

  private async handleVideoAutoplay() {
    try {
      await this.heroVideo.nativeElement.play();
    } catch (err) {
      // Add fallback for browsers that block autoplay
      this.heroVideo.nativeElement.muted = true;
      const playPromise = this.heroVideo.nativeElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(_ => {
          // Show play button overlay if needed
        });
      }
    }
  }
}
