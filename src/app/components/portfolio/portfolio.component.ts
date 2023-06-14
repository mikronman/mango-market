import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  tabs = [
    {
      name: 'Magnolia Celebrates',
      logo: '../../assets/img/magnolia_logo.png',
      url: 'https://www.magnoliacelebrates.com/',
      image: '../../assets/img/magnolia_square.png',
      title: 'Wedding Planners',
      headline: 'An experience that is simply classy and elegant',
      techs: 'Custom PHP, HTML, CSS & Javascript',
      body: `This website elegantly exhibits galleries of breathtaking photographs taken at premier venues across the Southeast. The design draws inspiration from distinguished brands like Rolex and Rolls Royce, ensuring a luxurious, high-end aesthetic experience.`
    },
    {
      name: 'DGP Publishing',
      logo: '../../assets/img/dgp_logo.png',
      image: '../../assets/img/dgp_square.jpg',
      url: 'https://www.dgppublishing.com/',
      title: 'Online Bookstore',
      headline: 'An experience that is delightful and organized',
      techs: 'Shopify eCommerce Website with Custom HTML & CSS',
      body: `This online bookstore offers a wide-ranging collection of books and instructional videos, neatly categorized for effortless browsing. The user-friendly interface, enhanced by Shopify's robust payment integration, ensures a smooth purchasing experience. Additionally, the client benefits from a comprehensive admin setup, enabling them to make changes without needing a developer's assistance.`
    },
    {
      name: 'Zubowicz MD',
      logo: '../../assets/img/zubowicz_logo.png',
      image: '../../assets/img/zubowicz_square.png',
      url: 'https://zubowicz.com/',
      title: 'Plastic Surgeon',
      headline: 'An artistic experience that inspires excellence and precision',
      techs: 'Custom Angular Application with Prismic CMS',
      body: `This website offers a wealth of information on a variety of cosmetic and reconstructive procedures, facilitating patient education and informed decision-making. With its clean, professional design and easy-to-navigate structure, the site reflects the high-quality care and expertise offered by Dr. Zubowicz.`
    }
  ];
  activeTab = this.tabs[0];
}
