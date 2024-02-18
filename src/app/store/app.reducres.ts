import { ActionReducerMap } from "@ngrx/store";

import { IAppState } from "./app.state";

import { postReducer } from "@states/post";

export const appReducers: ActionReducerMap<IAppState> = {
    posts: postReducer
}