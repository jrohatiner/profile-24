import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  expiryDate: string;
  credentialId: string;
  logo: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="certifications-container">
      <header>
        <h1>Professional Certifications</h1>
        <a routerLink="/" class="back-link">←Back to Home</a>
      </header>

      <div class="certifications-grid">
        <article class="certification-card" *ngFor="let cert of certifications">
          <div class="cert-header">
          <div></div>
            <img [src]="cert.logo" class="cert-logo">
           
           <div class="cert-issuer">{{ cert.issuer }}</div>
          </div>
          
          <h3>{{ cert.name }}</h3>
          
          <div class="cert-details">
            <div class="cert-date">
              <span class="label">Issued:</span> {{ cert.date }}
            </div>
            <div class="cert-expiry">
              <span class="label">Valid until:</span> {{ cert.expiryDate }}
            </div>
            <div class="cert-id">
              <span class="label">Credential ID:</span> {{ cert.credentialId }}
            </div>
          </div>

          <a href="https://www.cloudskillsboost.google/public_profiles/780e6916-6de8-4795-804e-dbbb5832b15a" class="verify-link">Verify Certificate →</a>
        </article>
      </div>
    </div>
  `,
  styles: [`
    .certifications-container {
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

    .certifications-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }

    .certification-card {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .certification-card:hover {
      transform: translateY(-5px);
    }

    .cert-header {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }

    .cert-logo {
      width: 24px;
      height: 24px;
    }

    .cert-issuer {
      color: #666;
      font-size: 0.9rem;
      margin-left: 1rem;
      float: left;
    }

    h3 {
      color: #1976d2;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }

    .cert-details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
      font-size: 0.9rem;
    }

    .label {
      font-weight: 500;
      color: #666;
      margin-right: 0.5rem;
    }

    .verify-link {
      display: inline-block;
      color: #1976d2;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .verify-link:hover {
      color: #1565c0;
    }
  `]
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      name: 'Google Professional Cloud Architect',
      issuer: 'Google',
      date: 'Jan 2023',
      expiryDate: 'Jan 2025',
      credentialId: 'GCP-PCA-2023-001',
      logo: '/assets/google.svg'
    },
    {
      name: 'Digital Cloud Leader',
      issuer: 'Google',
      date: 'June 2024',
      expiryDate: 'June 2026',
      credentialId: 'aa0aea84ead54bb79364256778c2b7c8',
      logo: '/assets/google.svg'
    },
    {
      name: 'Kubernetes',
      issuer: 'Google',
      date: 'Aug 2024',
      expiryDate: 'Aug 2026',
      credentialId: 'GCP-3993335',
      logo: '/assets/google.svg'
    },
    {
      name: 'Google Professional Cloud Architect',
      issuer: 'Google',
      date: 'Jan 2023',
      expiryDate: 'Jan 2025',
      credentialId: 'GCP-PCA-2023-001',
      logo: '/assets/google.svg'
    },
    {
      name: 'Terraform',
      issuer: 'Google',
      date: 'Oct 2024',
      expiryDate: 'Oct 2026',
      credentialId: 'GCP-CSA-2023-002',
      logo: '/assets/google.svg' 
    },
    {
      name: 'Machine Learning',
      issuer: 'Google',
      date: 'July 2023',
      expiryDate: 'Jun 2025',
      credentialId: 'GCP-4232331',
      logo: '/assets/google.svg' 
    },
    {
      name: 'Tensorflow on Google Cloud',
      issuer: 'Google',
      date: 'July 2023',
      expiryDate: 'July 2025',
      credentialId: 'GCP-4373876',
      logo: '/assets/google.svg' 
    },
    {
      name: 'Application Development in Cloud Run',
      issuer: 'Google',
      date: 'June 2023',
      expiryDate: 'June 2026',
      credentialId: 'GCP-3814407',
      logo: '/assets/google.svg'  
    },
    {
      name: 'Google Cloud Big Data & Machine Learning Fundamentals',
      issuer: 'Google',
      date: 'Jun 2023',
      expiryDate: 'Jun 2025',
      credentialId: 'GCP-4158111',
      logo: '/assets/google.svg' 
    },
    {
      name: '',
      issuer: '',
      date: 'July 2023',
      expiryDate: 'July 2025',
      credentialId: 'GCP-4373876',
      logo: '/assets/google.svg' },
    {
      name: '',
      issuer: '',
      date: 'June 2023',
      expiryDate: 'June 2026',
      credentialId: 'GCP-3814407',
      logo: ''  
    },
    {
      name: '',
      issuer: '',
      date: 'Jun 2023',
      expiryDate: 'Jun 2025',
      credentialId: 'GCP-4158111',
      logo: ''  
    }
  ];
}