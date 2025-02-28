import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  tabs = [
    {
      name: 'The Kindness Code',
      logo: '../../assets/img/kcf_logo.svg',
      url: 'https://www.thekindnesscodefoundation.org/',
      image: '../../assets/img/kcf_image.png',
      title: 'Non-Profit',
      headline: 'An experience inspired by the life of a kind young man',
      techs: 'Angular, Prismic CMS, Hubspot',
      body: `This non-profit's mission combines concepts of kindness and humanity, and reinforces principles through interactive AI technology (currently in development).`
    },
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
    },
    {
      name: 'Precision Painting',
      logo: '../../assets/img/precision_logo.png',
      url: 'https://precision-paint-172168bbfa38.herokuapp.com/',
      image: '../../assets/img/painted_room.jpg',
      title: 'Painter',
      headline: 'A clean experience for a sterling company.',
      techs: 'PHP, HTML, CSS, Javascript, Bootstrap',
      body: `This website presents it's services in a clean and organized way with a clear call to action.`
    }
  ];
  activeTab = this.tabs[0];
}
