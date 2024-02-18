import { EPostStatus } from "./post.reducer";
import { IAppState } from "@store/app.state";

const allPosts = (appState: IAppState) => appState.posts.posts;
const loadingPosts = (appState: IAppState) => appState.posts.status === EPostStatus.loading;
const errorGetPosts = (appState: IAppState) => appState.posts.error;

export const postSelector = {
    allPosts,
    loadingPosts,
    errorGetPosts
}
