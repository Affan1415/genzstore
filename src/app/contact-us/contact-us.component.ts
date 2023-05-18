import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder ,private http: HttpClient) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const name = this.contactForm.get('name')?.value;
      const email = this.contactForm.get('email')?.value;
      const message = this.contactForm.get('message')?.value;
  
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
  
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
  
      // Create an object with the form data
      const formData = {
        name: name,
        email: email,
        message: message
      };
  
      // Make an API call to submit the form data
      this.http.post('/api/contact', formData)
        .subscribe(
          response => {
            // Handle the success response
            console.log('Form submitted successfully');
            // Add any additional logic or display a success message
          },
          error => {
            // Handle the error response
            console.error('Error submitting form:', error);
            // Add any error handling logic or display an error message
          }
        );
    }
  }
}
