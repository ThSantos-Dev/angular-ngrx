import { ActionReducerMap } from "@ngrx/store";

import { IAppState } from "./app.state";

import { postReducer } from "@states/post";
import { userReducer } from "./states/user/user.reducer";

export const appReducers: ActionReducerMap<IAppState> = {
    posts: postReducer,
    user: userReducer,
}