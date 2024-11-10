import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="cv-container">
      <header>
        <h1>Curriculum Vitae</h1>
        <a routerLink="/" class="back-link">← Back to Home</a>
      </header>

      <div class="cv-actions">
        <button class="action-button view-button" (click)="viewCV()">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          {{ showPreview ? 'Hide CV' : 'View CV' }}
        </button>
       <!-- <a [href]="cvUrl" download class="action-button download-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download CV
        </a> -->
      </div>

      <div class="cv-preview" *ngIf="showPreview">
        <div class="pdf-container">
          <iframe 
            [src]="cvUrlSafe" 
            frameborder="0" 
            width="100%" 
            height="100%"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cv-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    .cv-actions {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .action-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
      text-decoration: none;
    }

    .view-button {
      background-color: #1976d2;
      color: white;
    }

    .download-button {
      background-color: #2e7d32;
      color: white;
    }

    .view-button:hover {
      background-color: #1565c0;
    }

    .download-button:hover {
      background-color: #1b5e20;
    }

    .cv-preview {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      overflow: hidden;
      margin-top: 2rem;
      height: 800px;
    }

    .pdf-container {
      width: 100%;
      height: 100%;
    }

    iframe {
      border: none;
    }

    svg {
      stroke: currentColor;
    }
  `]
})
export class CvComponent {
  cvUrl = 'assets/cv/Judith_Rohatiner_CV.pdf';
  showPreview = false;
  cvUrlSafe: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.cvUrlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.cvUrl);
  }

  viewCV() {
    this.showPreview = !this.showPreview;
  }
}