import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {
  email: string = '';
  emailSent: boolean = false;
  newsletterForm: any; // Define newsletterForm property

  sendNewsletter(): void {
    // Simulated email sending logic with a timeout
    // Replace this with your actual email sending logic
    this.emailSent = false; // Reset the emailSent flag

    // Simulating an asynchronous operation with a 2-second delay
    setTimeout(() => {
      // Check if the email is valid before sending
      if (this.validateEmail(this.email)) {
        // Actual email sending logic here
        // Replace the alert with your actual email sending logic
        alert(`Sending newsletter to: ${this.email}`);
        this.emailSent = true; // Set the emailSent flag to true
      } else {
        alert('Please enter a valid email address.');
      }
    }, 2000); // 2-second delay
  }

  // Function to validate email address
  validateEmail(email: string): boolean {
    // You can implement your own email validation logic here
    // This is a basic email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}


@NgModule({
  imports: [
    FormsModule // Add the FormsModule here
  ]
})
export class NewsletterModule { }
