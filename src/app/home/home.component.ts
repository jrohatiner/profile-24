import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-container">
      <header>
        <h1>Judith Rohatiner</h1>
        <p class="subtitle">Full Stack Software Engineer | Certified Professional Cloud Architect</p>
      </header>

      <section class="features">
        <div class="feature-card" routerLink="/projects">
          <h3 class="FP-btn">Projects</h3>
          <p classs="fpg-text">read more</p>
        </div>
        <div class="feature-card" routerLink="/skills">
          <h3 class="FP-btn">Skills</h3>
          <p classs="fpg-text">read more</p>
        </div>
        <div class="feature-card" routerLink="/certifications">
          <h3 class="FP-btn">Certifications</h3>
          <p classs="fpg-text">read more</p>
        </div>
        <div class="feature-card" routerLink="/cv">
          <h3 class="FP-btn">CV</h3>
          <p classs="fpg-text">read more</p>
        </div>
        <div class="feature-card" routerLink="/contact">
          <h3 class="FP-btn">Contact</h3>
          <p classs="fpg-text">get in touch</p>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    header {
      text-align: center;
      margin-bottom: 3rem;
    }

    h1 {
      font-size: 2.5rem;
      color: #1976d2;
      margin-bottom: 1rem;
    }
    h3.FP-btn {
      text-transform: uppercase;
    }
    p.fpg-text {
      text-transform: lowercase;
    }
    .subtitle {
      font-size: 1.2rem;
      color: #666;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .feature-card {
      padding: 1rem;
      border-radius: 8px;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
      cursor: pointer;
    }

    .feature-card:hover {
      transform: translateY(-5px);
    }

    .feature-card h3 {
      color: #1976d2;
      margin-bottom: 1rem;
    }
  `]
})
export class HomeComponent {}