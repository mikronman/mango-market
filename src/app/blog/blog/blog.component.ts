import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/cms/blog.service';
import { Router, NavigationEnd } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
  
  faArrowLeft = faArrowLeft;

  post: any;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.blogService.getBlogPost(id).subscribe({
        next: (post) => {
          this.post = post;
        },
        error: (error) => {
          console.error('Error:', error); // Add this line to log any errors
        }
      });
    }
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  goBack() {
    this.router.navigate(['/blog']);
  }
}
