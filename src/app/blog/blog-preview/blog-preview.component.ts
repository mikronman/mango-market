import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/cms/blog.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss']
})
export class BlogPreviewComponent implements OnInit {
  blogPosts: any[] = [];

  constructor(
    private blogService: BlogService,
    private router: Router
    ) { }
  
  ngOnInit(): void {
    this.fetchBlogPosts();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  fetchBlogPosts(): void {
    this.blogService.getBlogPosts().subscribe((posts) => {
      this.blogPosts = posts;
    });
  }

}
