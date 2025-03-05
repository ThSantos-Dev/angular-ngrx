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

  createPost(post: IPost): Observable<IPost> {
    const newPost = {
      ...post,
      id: Math.floor(Math.random() * 10) + 1,
      userId: 1
    }

    return of(newPost).pipe(
      delay(1000)
    );
  }
}
