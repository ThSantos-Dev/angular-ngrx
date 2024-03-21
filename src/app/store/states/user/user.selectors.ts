import { IAppState } from "@store/app.state";
import { EUserStatus } from "./user.reducer";

const currentUser = (appState: IAppState) => appState.user.user;

const loadingUser = (appState: IAppState) => appState.user.status === EUserStatus.loading;

const errorGetUser = (appState: IAppState) => appState.user.error;

export const userSelector = {
    currentUser,
    loadingUser,
    errorGetUser
}