import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialComponent } from '../social/social.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SocialComponent],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <p class="copyright">© 2024 Judith Rohatiner. All rights reserved.</p>
        <app-social></app-social>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: white;
      padding: 1.5rem 0;
      position: fixed;
      bottom: 0;
      width: 100%;
      box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
      margin-top: 1rem;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .copyright {
      color: #666;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {}