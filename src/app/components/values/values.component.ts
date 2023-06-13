import { Component } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent {
  values = [
    { icon: './assets/img/efficient.png', title: `Efficient`, description: `I work quickly, and I don't cut corners. I know how to deliver results cost-effectively.` },
    { icon: './assets/img/handshake.png', title: `Fair`, description: `I avoid complex agreements, confusing contracts and sneaky costs. I keep things very simple and transparent.` },
    { icon: './assets/img/reliable.png', title: `Reliable`, description: `I stand behind my work making sure it's done right. I tend to stick around going above and beyond for my clients.` }
  ];
}
