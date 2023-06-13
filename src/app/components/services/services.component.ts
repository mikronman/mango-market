import { Component } from '@angular/core';
import { faComments, faPencilRuler, faCode, faCogs, faShoppingCart, faPlug, faServer, faChartLine, faBullhorn, faRocket, faUniversalAccess, faShieldAlt, faSearch, faUsers, faSyncAlt, faCheck, faThumbsUp, faPuzzlePiece, faClock, faCheckCircle, faCloud } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  
  faPuzzlePiece = faPuzzlePiece;
  faClock = faClock;
  faCheckCircle = faCheckCircle;
  
  services = [
    {
      icon: faComments,
      name: 'Consultation',
      description: 'Chat with me and let’s map out your online vision.'
    },
    {
      icon: faPencilRuler,
      name: 'Web Design',
      description: 'I’ll make sure your website looks great and resonates with your audience.'
    },
    {
      icon: faCode,
      name: 'Custom Development',
      description: 'Got a unique idea? I’ll bring it to life with custom solutions.'
    },
    {
      icon: faCogs,
      name: 'CMS Development',
      description: 'Manage your website easily with a powerful content management system.'
    },
    {
      icon: faShoppingCart,
      name: 'eCommerce Development',
      description: 'Sell your products online with a sleek and secure storefront.'
    },
    {
      icon: faPlug,
      name: 'Integrations',
      description: 'I’ll make sure your website plays nice with all your favorite tools.'
    },
    {
      icon: faCloud,
      name: 'Web Hosting',
      description: 'Leave the technical stuff to me with worry-free website hosting.'
    },
    {
      icon: faChartLine,
      name: 'Analytics',
      description: 'Understand your audience better with detailed website analytics.'
    },
    {
      icon: faBullhorn,
      name: 'Advertising',
      description: 'Reach more people with targeted online advertising.'
    }
  ];

  qualities = [
    {
      icon: faRocket,
      name: 'Performance',
      description: 'Your website will be snappy, keeping your visitors happy.'
    },
    {
      icon: faUniversalAccess,
      name: 'Accessibility',
      description: 'I make sure everyone can enjoy your website, regardless of ability.'
    },
    {
      icon: faShieldAlt,
      name: 'Security',
      description: 'Your website’s security is a top priority for me.'
    },
    {
      icon: faSearch,
      name: 'Content Optimization',
      description: 'Your content will be tailored for maximum online visibility.'
    },
    {
      icon: faUsers,
      name: 'UX Centered Design',
      description: 'Your website will be designed with the user in mind.'
    },
    {
      icon: faSyncAlt,
      name: 'Compatibility',
      description: 'Your website will look and work great on any device.'
    },
    {
      icon: faCheck,
      name: 'Compliance',
      description: 'Your website will meet all necessary standards and regulations.'
    },
    {
      icon: faThumbsUp,
      name: 'Reliability',
      description: 'You can count on your website to always perform at its best.'
    }
  ];
}
