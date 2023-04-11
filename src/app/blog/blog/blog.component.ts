import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/cms/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
 
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
