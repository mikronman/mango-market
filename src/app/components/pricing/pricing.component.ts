import { Component } from '@angular/core';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {

  faCommentsDollar = faCommentsDollar;

  tiers = [
    {
      title: 'Beginner Services',
      range: '$500 - $2,000',
      time: '2 - 4 Weeks',
      complexity: 'low',
      description: `This includes very basic features, SEO setup, and often built using templates`,
      example: 'Personal websites',
      support: 'Paid separately' 
    },
    {
      title: 'Intermediate Services',
      range: '$2,000 - $7,500',
      time: '1 - 3 Months',
      complexity: 'Medium',
      description: `This typically includes more complex work, robust online advertising, advanced functionality or integrations`,
      example: 'eCommerce Websites',
      support: 'Limited support included' 
    },
    {
      title: 'Advanced Services',
      range: '$7,500 - $20,000',
      time: '3 - 6 Months',
      complexity: 'High',
      description: `This includes heavy integrations, advanced features and functionality, Advanced SEO optimization`,
      example: 'eCommerce Websites',
      support: 'Comprehensive support usually included' 
    },
    {
      title: 'Enterprise Services',
      range: '$20,000 +',
      time: '6 + Months',
      complexity: 'High',
      description: `This includes highly heavy integrations, advanced features and functionality, Advanced SEO optimization`,
      example: 'Autotrader',
      support: 'Comprehensive support usually included' 
    },
  ]
}
