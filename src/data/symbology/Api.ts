import { SymbologActions } from "./Reducer";
import store from "../../services/Store";

const Api = {
    setColorScheme: (colorScheme: string) => {
        store.dispatch(SymbologActions.setColorScheme(colorScheme))
    }
}

export default Api;