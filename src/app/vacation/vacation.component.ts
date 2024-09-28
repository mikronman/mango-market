import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.scss']
})
export class VacationComponent implements OnInit, OnDestroy  {
  targetDate: Date = new Date('2025-09-20T08:00:00-04:00'); // Set the target date and time
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private subscription!: Subscription;

  ngOnInit(): void {
    // Call updateCountdown once at the start to avoid displaying zeroes
    this.updateCountdown();

    // Start the interval to update every second
    this.subscription = interval(1000).subscribe(() => {
      this.updateCountdown();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  updateCountdown(): void {
    const currentTime = new Date().getTime();
    const targetTime = this.targetDate.getTime();
    const timeDifference = targetTime - currentTime;

    if (timeDifference > 0) {
      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    } else {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }
}
