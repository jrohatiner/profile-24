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
        <h1>Skills & Expertise</h1>
        <a routerLink="/" class="back-link">← Back to Home</a>
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

    header {
      margin-bottom: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      font-size: 2.5rem;
      color: #1976d2;
    }

    .back-link {
      color: #666;
      text-decoration: none;
      font-size: 1.1rem;
      transition: color 0.3s ease;
    }

    .back-link:hover {
      color: #1976d2;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
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
        { name: 'Angular', level: 90 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 88 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      name: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 82 },
        { name: 'Docker', level: 78 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 80 }
      ]
    }
  ];
}