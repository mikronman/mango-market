import { Injectable } from '@angular/core';
import { ContentfulService } from './contentful-client'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private contentfulService: ContentfulService, private apollo: Apollo) {}

  getBlogPosts(): Observable<any> {
    const blogPostsQuery = gql`
      query {
        blogPostCollection {
          items {
            sys {
              id
            }
            blogImage {
              url
              description
              sys {
                id
              }
            }
            blogTitle
            shortDescription {
              json
            }
          }
        }
      }
    `;

    return this.apollo
      .watchQuery<any>({
        query: blogPostsQuery,
      })
      .valueChanges.pipe(map((result) => result.data.blogPostCollection.items));
  }

  getBlogPost(id: string): Observable<any> {
    const blogPostQuery = gql`
      query blogPostEntryQuery($id: String!) {
        blogPost(id: $id) {
          sys {
            id
          }
          blogImage {
            url
            description
            sys {
              id
            }
          }
          blogTitle
          blogBody {
            json
          }
        }
      }
    `;
  
    return this.apollo
      .watchQuery<any>({
        query: blogPostQuery,
        variables: {
          id: id,
        },
      })
      .valueChanges.pipe(map((result) => result.data.blogPost));
  }
   
}

