import { IPost } from "@interfaces/post.interface";
import { IPostState } from "@reducers/post.reducer";

export interface IAppState {
    posts: IPostState
}