import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor(private apollo: Apollo) {}
}