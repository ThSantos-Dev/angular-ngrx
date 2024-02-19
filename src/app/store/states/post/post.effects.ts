import { inject } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { postActions } from '@states/post';
import { PostService } from '@services/post.service';

export const getPostEffect = createEffect(
  (actions$ = inject(Actions), postService = inject(PostService)) =>
    actions$.pipe(
      ofType(postActions.loadingPosts),
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

export const postPostEffect = createEffect(
  (actions$ = inject(Actions), postService = inject(PostService)) => 
    actions$.pipe(
      ofType(postActions.createPost),
      switchMap((post) => 
        postService.createPost(post)
       .pipe(
            map((post) => postActions.successCreatePost(post)),
            catchError((error) => of(postActions.errorCreatePost({ error })))
          )
      )
    ),
    { functional: true }
)