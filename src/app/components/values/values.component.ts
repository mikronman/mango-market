import { Component } from '@angular/core';
import { faHandshake, faAnchor, faTruckFast } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent {

  faHandshake = faHandshake;
  faAnchor = faAnchor;
  faTruckFast = faTruckFast;

  values = [
    { icon: faTruckFast, image: './assets/img/efficient.png', title: `Efficient`, description: `I work quickly, and I don't cut corners. I know how to deliver results cost-effectively.` },
    { icon: faHandshake, image: './assets/img/handshake.png', title: `Fair`, description: `I avoid complex agreements, confusing contracts and sneaky costs. I keep things very simple and transparent.` },
    { icon: faAnchor, image: './assets/img/reliable.png', title: `Reliable`, description: `I stand behind my work making sure it's done right. I tend to stick around going above and beyond for my clients.` }
  ];
}
