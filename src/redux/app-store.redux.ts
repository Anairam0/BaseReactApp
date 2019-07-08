import { RouterState } from "connected-react-router";
import { LoginStore } from "../components/login/login.redux.store"


export interface AppStore {
    router : RouterState,
    login :LoginStore,
}