import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  faCommentsDollar = faCommentsDollar;
  
  submitted = false;
  submittedSuccess = false

  name!: string;
  email!: string;
  message!: string;

  constructor(private http: HttpClient) {}

  sendEmail(event: Event) {
    event.preventDefault();

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
      },
      error: (error) => {
        console.error('Error sending email:', error);
      }
    });
  }
}
