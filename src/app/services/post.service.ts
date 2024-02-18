import { Injectable } from '@angular/core';
import { IPost } from '@interfaces/post.interface';
import { POSTS_MOCK } from '@mocks/posts.mock';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  getPosts(): IPost[] {
    return POSTS_MOCK;
  }

  getPostsApi(): Observable<IPost[]> {
    return of(this.getPosts()).pipe(
      delay(1000)
    );
  }
}
