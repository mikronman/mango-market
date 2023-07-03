import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faCommentsDollar, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../environments/environment';

declare var gtag: Function;
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  faCommentsDollar = faCommentsDollar;
  faSpinner = faSpinner;

  submitted = false;
  submittedSuccess = false;
  submitting = false;
  errorMessage: string = '';
  hasError: boolean = false;
  buttonText: string = 'Send Message';

  name!: string;
  email!: string;
  message!: string;

  constructor(private http: HttpClient) {}

  sendEmail(event: Event) {
    event.preventDefault();
    this.submitting = true;
    this.buttonText = 'Sending...';
    this.hasError = false;
    this.errorMessage = '';

    setTimeout(() => {
    const emailData = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    const apiUrl = environment.apiUrl;

    this.http.post<any>(`${apiUrl}/email/send`, emailData)
      .subscribe({
        next: (response) => {
          console.log(response.message);
          this.submitted = true;
          this.submittedSuccess = true;
          // Track conversion
          gtag('event', 'conversion', {
            send_to: 'AW-726570860/hy7-CJmUn7YYEOyuutoC'
          });
        },
        error: (error) => {
          console.error('Error sending email:', error);
          this.hasError = true;
          this.errorMessage = 'Oops, we have an error. Please try sending again, or just email me directly at mkleczkajr@gmail.com.';
          this.buttonText = 'Send Message'; // Reset button text on error
          this.submitting = false; // Set submitting to false to revert the button state
        },
        complete: () => {
          this.submitting = false;
          this.errorMessage = '';
          this.buttonText = 'Send Message'; // Reset button text after completion
        }
      });
    }, 1000);
  }
}
