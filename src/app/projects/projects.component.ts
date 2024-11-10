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
        <h1>My Projects</h1>
        <a routerLink="/" class="back-link">← Back to Home</a>
      </header>

      <div class="projects-grid">
        <article class="project-card">
          <h3>Project 1</h3>
          <p class="project-type">Full Stack Application</p>
          <p class="project-description">
            A comprehensive web application built with Angular and Node.js
          </p>
          <div class="tech-stack">
            <span class="tech-tag">Angular</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
          </div>
          <a href="#" class="project-link">View Project →</a>
        </article>

        <article class="project-card">
          <h3>Project 2</h3>
          <p class="project-type">Cloud Architecture</p>
          <p class="project-description">
            Serverless application deployed on Google Cloud Platform
          </p>
          <div class="tech-stack">
            <span class="tech-tag">GCP</span>
            <span class="tech-tag">Cloud Functions</span>
            <span class="tech-tag">Firebase</span>
          </div>
          <a href="#" class="project-link">View Project →</a>
        </article>

        <article class="project-card">
          <h3>Project 3</h3>
          <p class="project-type">Mobile Application</p>
          <p class="project-description">
            Cross-platform mobile app built with Flutter
          </p>
          <div class="tech-stack">
            <span class="tech-tag">Flutter</span>
            <span class="tech-tag">Dart</span>
            <span class="tech-tag">Firebase</span>
          </div>
          <a href="#" class="project-link">View Project →</a>
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