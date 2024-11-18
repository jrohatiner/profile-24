import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="projects-container">
      <header>
        <h1>Projects</h1>
        <a routerLink="/" class="back-link">← Home</a>
      </header>

      <div class="projects-grid">
        <article class="project-card">
          <h3>K16-Scaffold Course Editor</h3>
          <p class="project-type">Full Stack Application</p>
          <p class="project-description">
            A comprehensive web application built with Angular, Node.js and Nebular Styling Library
          </p>
          <div class="tech-stack">
            <span class="tech-tag">Angular</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">Postgres</span>
            <span class="tech-tag">Nebular</span>
          </div>
          <a href="https://k16solutions.com/resources/product/scaffold-datax/" class="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
        </article>

        <article class="project-card">
          <h3>Vindati</h3>
          <p class="project-type">Frontend Development</p>
          <p class="project-description">
          Full Stack Angular App created for Willis Towers Watson 
          </p>
          <div class="tech-stack">
            <span class="tech-tag">Angular</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">Typescript</span>
            <span class="tech-tag">SQL</span>
            <span class="tech-tag">Cloud Functions</span>
          </div>
          <a href="https://vindati.com/" class="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
        </article>

        <article class="project-card">
          <h3>Kaplan Inc./ Colloquy360 </h3>
          <p class="project-type">Mobile Application</p>
          <p class="project-description">
          LMS/CMS base theme and components for The LEARN Platform</p>
          <div class="tech-stack">
            <span class="tech-tag">PHP</span>
            <span class="tech-tag">Moodle</span>
            <span class="tech-tag">SQL</span>
            <span class="tech-tag">Javascript</span>
          </div>
          <a href="https://drive.google.com/file/d/1MsX6_5tFicAJ4dTNdlRBJ_L9pjxWLdtE/view?usp=drive_link" class="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
        </article>
        <article class="project-card">
          <h3>DevFest 2023 Accessibility Workshop</h3>
          <p class="project-type">Full Stack Application</p>
          <p class="project-description">
            A comprehensive web application built with Angular and Node.js
          </p>
          <div class="tech-stack">
            <span class="tech-tag">Javascript</span>
            <span class="tech-tag">ARIA</span>
            <span class="tech-tag">A11Y</span>
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">CSS</span>
            <span class="tech-tag">WebAim</span>
          </div>
          <a href="https://docs.google.com/presentation/d/e/2PACX-1vTeA-yiAzjtztAH8A8pYpMmzL6WY5yX9CfFkxpkr_GRO8NbbE-e77hbmo4DtL5ZTw/pub?start=true&loop=false&delayms=3000" class="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
        </article>
        <article class="project-card">
          <h3>DevFest Orlando 2024</h3>
          <p class="project-type">Angular Command Line Interface</p>
          <p class="project-description">
            Speaker presentation Orlando DevFest 2024
          </p>
          <div class="tech-stack">
            <span class="tech-tag">GCP</span>
            <span class="tech-tag">Cloud Functions</span>
            <span class="tech-tag">Angular</span>
            <span class="tech-tag">Bash</span>
          </div>
          <a href="https://docs.google.com/presentation/d/e/2PACX-1vQmh8tPYlIjbDX31Dug59A85ptfUL82pZMbseRbuxvW9OYjtSdGdhmdpsRbd7XDFg/pub?start=true&loop=false&delayms=3000" class="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
        </article>

        <article class="project-card">
          <h3>Miami DevFest 2023</h3>
          <p class="project-type">Accessibility</p>
          <p class="project-description">
            Cross-platform mobile app built with Flutter
          </p>
          <div class="tech-stack">
          <span class="tech-tag">Javascript</span>
          <span class="tech-tag">ARIA</span>
          <span class="tech-tag">A11Y</span>
          <span class="tech-tag">HTML</span>
          <span class="tech-tag">CSS</span>
          <span class="tech-tag">WebAim</span>
          </div>
          <a href="https://docs.google.com/presentation/d/e/2PACX-1vTeA-yiAzjtztAH8A8pYpMmzL6WY5yX9CfFkxpkr_GRO8NbbE-e77hbmo4DtL5ZTw/pub?start=true&loop=false&delayms=3000" class="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
        </article>
      </div>
    </div>
  `,
  styles: [`
    .projects-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .project-card {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
    article.project-card {
      margin-bottom: 6rem;
  }

    .project-card:hover {
      transform: translateY(-5px);
    }

    .project-card h3 {
      color: #1976d2;
      margin-bottom: 0.5rem;
    }

    .project-type {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .project-description {
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .tech-tag {
      background: #e3f2fd;
      color: #1976d2;
      padding: 0.25rem 0.75rem;
      border-radius: 16px;
      font-size: 0.85rem;
    }

    .project-link {
      display: inline-block;
      color: #1976d2;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .project-link:hover {
      color: #1565c0;
    }
  `]
})
export class ProjectsComponent {}