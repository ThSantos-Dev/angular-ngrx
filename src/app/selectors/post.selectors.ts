import { EPostStatus } from "@reducers/post.reducer";
import { IAppState } from "../state/app.state";

const allPosts = (appState: IAppState) => appState.posts.posts;
const loadingPosts = (appState: IAppState) => appState.posts.status === EPostStatus.loading;
const errorGetPosts = (appState: IAppState) => appState.posts.error;

export const postSelector = {
    allPosts,
    loadingPosts,
    errorGetPosts
}
