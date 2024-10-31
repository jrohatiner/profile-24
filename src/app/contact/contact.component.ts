import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  template: `
    <div class="contact-container">
      <header>
        <h1>Contact Me</h1>
        <a routerLink="/" class="back-link">← Back to Home</a>
      </header>

      <div class="contact-content">
        <div class="contact-info">
          <h2>Let's Connect</h2>
          <p>Feel free to reach out for opportunities, collaborations, or just to say hello!</p>
          
          <div class="social-links">
            <a href="https://linkedin.com" target="_blank" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input 
              id="name" 
              type="text" 
              formControlName="name"
              [class.error]="isFieldInvalid('name')"
            >
            <span class="error-message" *ngIf="isFieldInvalid('name')">
              Name is required
            </span>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input 
              id="email" 
              type="email" 
              formControlName="email"
              [class.error]="isFieldInvalid('email')"
            >
            <span class="error-message" *ngIf="isFieldInvalid('email')">
              Please enter a valid email address
            </span>
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input 
              id="subject" 
              type="text" 
              formControlName="subject"
              [class.error]="isFieldInvalid('subject')"
            >
            <span class="error-message" *ngIf="isFieldInvalid('subject')">
              Subject is required
            </span>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              formControlName="message"
              rows="5"
              [class.error]="isFieldInvalid('message')"
            ></textarea>
            <span class="error-message" *ngIf="isFieldInvalid('message')">
              Message is required
            </span>
          </div>

          <button type="submit" [disabled]="contactForm.invalid || isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
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

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 3rem;
    }

    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
      }
    }

    .contact-info {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .contact-info h2 {
      color: #1976d2;
      margin-bottom: 1rem;
    }

    .contact-info p {
      color: #666;
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .social-links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: #1976d2;
      text-decoration: none;
      padding: 0.5rem;
      border-radius: 4px;
      transition: background-color 0.3s ease;
    }

    .social-link:hover {
      background-color: #e3f2fd;
    }

    .contact-form {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #333;
      font-weight: 500;
    }

    input, textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    input:focus, textarea:focus {
      outline: none;
      border-color: #1976d2;
    }

    input.error, textarea.error {
      border-color: #dc3545;
    }

    .error-message {
      color: #dc3545;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    button {
      width: 100%;
      padding: 1rem;
      background-color: #1976d2;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover:not(:disabled) {
      background-color: #1565c0;
    }

    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        this.isSubmitting = false;
        this.contactForm.reset();
      }, 1500);
    }
  }
}