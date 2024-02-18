import { ActionReducerMap } from "@ngrx/store";

import { IAppState } from "./app.state";

import { postReducer } from "@reducers/post.reducer";

export const appReducers: ActionReducerMap<IAppState> = {
    posts: postReducer
}