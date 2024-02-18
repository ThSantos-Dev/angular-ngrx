import { inject } from '@angular/core';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { postActions } from '@actions/post.actions';
import { PostService } from '@services/post.service';

export const getPostEffect = createEffect(
  (actions$ = inject(Actions), postService = inject(PostService)) =>
    actions$.pipe(
      ofType(postActions.loadingPosts),
      tap(() => console.log('To aqui no effect')),
      switchMap(() =>
        postService
          .getPostsApi()
          .pipe(
            map((posts) => postActions.successGetPosts({ posts })),
            catchError((error) => of(postActions.errorGetPosts({ error })))
          )
      )
    ),
  { functional: true }
);
