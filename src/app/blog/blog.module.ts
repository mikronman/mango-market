import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from '@apollo/client/core';
import { environment } from '../../environments/environment';
import { BlogService } from '../services/cms/blog.service';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
import { BlogPreviewComponent } from './blog-preview/blog-preview.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogPreviewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class BlogModule { }
