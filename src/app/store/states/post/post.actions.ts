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

export const postActions = {
  loadingPosts,
  successGetPosts,
  errorGetPosts,
};