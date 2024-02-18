import { postActions } from "@actions/post.actions";
import { IPost } from "@interfaces/post.interface";
import { POSTS_MOCK } from "@mocks/posts.mock";
import { createReducer, on } from "@ngrx/store";

export enum EPostStatus {
    pending = 'pending',
    loading = 'loading',
    success = 'success',
    error = 'error'
}

export interface IPostState {
    posts: IPost[],
    error: string | null,
    status: EPostStatus
}

const initialState: IPostState = {
    posts: [],
    error: null,
    status: EPostStatus.pending
}

export const postReducer = createReducer(
    initialState,
    on(postActions.loadingPosts, (state) => ({
        ...state,
        status: EPostStatus.loading,
    })),
    on(postActions.successGetPosts, (state, posts) => ({
        ...state,
        posts: posts.posts,
        status: EPostStatus.success
    })),
    on(postActions.errorGetPosts, (state, error) => ({
        ...state,
        error: error.error,
        status: EPostStatus.error
    }))
);