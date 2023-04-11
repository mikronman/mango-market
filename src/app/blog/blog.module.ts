import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { Apollo, ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from '@apollo/client/core';
import { environment } from '../../environments/environment';
import { BlogService } from '../services/cms/blog.service';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BlogComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ApolloModule
  ],
  exports: [BlogComponent],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: () => {
        return {
          cache: new InMemoryCache(),
          link: new HttpLink({
            uri: `https://graphql.contentful.com/content/v1/spaces/${environment.contentfulSpaceId}`,
            headers: {
              'Authorization': `Bearer ${environment.contentfulAccessToken}`,
              'Content-Language': 'en-US',
            }
          }),
        };
      },
      deps: [],
    },
    BlogService
  ],
})
export class BlogModule { }
