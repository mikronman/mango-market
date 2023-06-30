import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/cms/blog.service';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss']
})
export class BlogPreviewComponent implements OnInit {
  blogPosts: any[] = [];

  constructor(private blogService: BlogService) { }
  
  ngOnInit(): void {
    this.fetchBlogPosts();
  }

  fetchBlogPosts(): void {
    this.blogService.getBlogPosts().subscribe((posts) => {
      this.blogPosts = posts;
    });
  }

}
