import { createReducer, on } from '@ngrx/store';

import { IPost } from '@interfaces/post.interface';
import { postActions } from './post.actions';

export enum EPostStatus {
  pending = 'pending',
  loading = 'loading',
  success = 'success',
  error = 'error',
}

export interface IPostState {
  posts: IPost[];
  error: string | null;
  status: EPostStatus;
}

const initialState: IPostState = {
  posts: [],
  error: null,
  status: EPostStatus.pending,
};

export const postReducer = createReducer(
  initialState,
  on(postActions.loadingPosts, (state) => ({
    ...state,
    status: EPostStatus.loading,
  })),
  on(postActions.successGetPosts, (state, posts) => ({
    ...state,
    posts: posts.posts,
    status: EPostStatus.success,
  })),
  on(postActions.errorGetPosts, (state, error) => ({
    ...state,
    error: error.error,
    status: EPostStatus.error,
  })),
  on(postActions.createPost, (state, post) => {
    console.log('Antes da disparada a inserção no objeto de estado');
    console.log(state);

    const newState = {
      ...state,
      // posts: [post, ...state.posts],
      status: EPostStatus.loading,
    };

    console.log('Disparando o loading');
    console.log(newState);

    return newState;
  }),
  on(postActions.successCreatePost, (state, post) => {
    console.log('Antes da inserção no objeto de estado');
    console.log(state);

    const newState = {
      ...state,
      posts: [post, ...state.posts],
      status: EPostStatus.success,
    };

    console.log('Disparando o success');
    console.log(newState);

    return newState;
  }),
  on(postActions.errorCreatePost, (state, error) => {
    console.log('Antes do erro');
    console.log(state);

    const newState = {
      ...state,
      error: error.error,
      status: EPostStatus.error,
    };

    console.log('Disparando o erro');
    console.log(newState);

    return newState;
  })
);
