import { IPost } from "@interfaces/post.interface";
import { IPostState } from "@states/post";

export interface IAppState {
    posts: IPostState
}