import { AnyAction } from "redux";

//This creates a method for function in order to determine if the create action type matches the action type passed through the reducer

type Matchable<AC extends () => AnyAction> = AC & {
    type: ReturnType<AC>['type'];
    match(action: AnyAction): action is ReturnType<AC>
}

export function withMatcher<AC extends ()=> AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;
export function withMatcher<AC extends (...args: any[]) => AnyAction & { type:string }>(actionCreator: AC): Matchable<AC>;
export function withMatcher( actionCreator: Function ){
    const type = actionCreator().type;
    return Object.assign(actionCreator, {
        type,
        match(action: AnyAction){
            return action.type
        }
    })
}


export type ActionWithPayload<T, P> = {
    type:T;
    payload:P
}

export type Action<T> = {
    type:T
}

//This is function overload in order to handle cases in which we don't have payload

export function createAction<T extends string, P>(type: T, payload: P):ActionWithPayload<T, P>;

export function createAction<T extends string>(type: T, payload: void):Action<T>;


export function createAction<T extends string, P>(type: T, payload: P) {
    return { type, payload }
}


