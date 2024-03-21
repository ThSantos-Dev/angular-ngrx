import { IPost } from "@interfaces/post.interface";
import { IUser } from "@interfaces/user.interface";
import { IPostState } from "@states/post";
import { IUserState } from "./states/user/user.reducer";

export interface IAppState {
    posts: IPostState,
    user: IUserState
}