import { ActionReducer, MetaReducer } from "@ngrx/store";
import { AuthActionTypes } from "../authentication/auth.actions";



export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {

    if(action.type === AuthActionTypes.LOGOUT_ACTION_SUCCESS){
      return reducer(undefined, action);
    }

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];
