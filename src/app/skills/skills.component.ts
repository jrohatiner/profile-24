import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="skills-container">
      <header>
        <h1>Skills</h1>
        <a routerLink="/" class="back-link">← Home</a>
      </header>

      <div class="skills-grid">
        <section class="skill-category" *ngFor="let category of skillCategories">
          <h2>{{ category.name }}</h2>
          <div class="skills-list">
            <div class="skill-item" *ngFor="let skill of category.skills">
              <div class="skill-header">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="progress-bar">
                <div class="progress" [style.width.%]="skill.level"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .skills-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-bottom: 8rem;
    }

    .skill-category {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    h2 {
      color: #1976d2;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }

    .skills-list {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .skill-item {
      width: 100%;
    }

    .skill-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }

    .skill-name {
      font-weight: 500;
    }

    .skill-level {
      color: #666;
    }

    .progress-bar {
      width: 100%;
      height: 8px;
      background-color: #e3f2fd;
      border-radius: 4px;
      overflow: hidden;
    }

    .progress {
      height: 100%;
      background-color: #1976d2;
      border-radius: 4px;
      transition: width 0.3s ease;
    }
  `]
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'Angular', level: 100 },
        { name: 'React', level: 100 },
        { name: 'TypeScript', level: 100 },
        { name: 'HTML/CSS', level: 100 },
        { name: 'Javascript', level: 100 },
        { name: 'API', level: 100 }
      ]
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 100 },
        { name: 'Python', level: 70 },
        { name: 'SQL', level: 85 },
        { name: 'Google Cloud Platform', level: 100 },
        { name: 'AWS', level: 100 },
        { name: 'Postgres', level: 100 },
        { name: 'SQLite', level: 100 },
        { name: 'Docker', level: 100 },
        { name: 'Kubernetes', level: 100 },
        { name: 'CI/CD', level: 100 },
        { name: 'Git', level: 100 }
        
      ]
    },
    {
      name: 'Testing',
      skills: [
        { name: 'Jasmine', level: 80 },
        { name: 'Mocha', level: 80 },
        { name: 'Karma', level: 80 },
        { name: 'Cypress', level: 100 }
      ]
    },
    {
      name: 'Soft Skills',
      skills: [
        { name: 'Leadership', level: 100 },
        { name: 'Collaboration', level: 100 },
        { name: 'Adaptability', level: 100 },
        { name: 'Google Certified Public Speaker', level: 100 },
        { name: 'Creativity', level: 100 },
        { name: 'Critical Thinking', level: 100 },
        { name: 'Time Management', level: 100 },
        { name: 'Attention To Detail', level: 100 }
      ]
    },
  ];
}