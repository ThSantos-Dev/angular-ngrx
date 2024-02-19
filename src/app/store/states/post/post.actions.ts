import { IPost } from "@interfaces/post.interface";

import { createAction, props } from "@ngrx/store";

const loadingPosts = createAction('[Post] Loading Posts');
const successGetPosts = createAction(
    '[Post] Success Get Posts',
    props<{ posts: IPost[] }>()
);
const errorGetPosts = createAction(
    '[Post] Success Get Posts',
    props<{ error: string }>()
);

const createPost = createAction(
  '[Post] Create Post',
  props<IPost>()
);

const successCreatePost = createAction(
  '[Post] Success Create Post',
  props<IPost>()
);

const errorCreatePost = createAction(
  '[Post] Error Create Post',
  props<{ error: string }>()
);

export const postActions = {
  loadingPosts,
  successGetPosts,
  errorGetPosts,
  createPost,
  successCreatePost,
  errorCreatePost,
};