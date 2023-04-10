import { Injectable } from '@angular/core';
import { ContentfulClientApi, createClient } from 'contentful';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ContentfulService {
  private client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: environment.contentfulSpaceId,
      accessToken: environment.contentfulAccessToken,
    });
  }

  // Add methods to interact with Contentful here
}