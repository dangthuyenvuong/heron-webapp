import { AnyAction, Reducer } from "redux";



type PayloadAction = {
    type: string
    payload: any
}
type CreateSliceProp<T, R> = {
    initialState: T,
    name: string,
    reducers: {
        [k in keyof R]: (state: T, action: PayloadAction) => any
    }
}

type CreateSliceResponse<T, R> = {
    actions: {
        [k in keyof R]: (data?: any) => any
    },
    reducer:  Reducer<T, AnyAction>,
    type: {
        [k in keyof R]: string
    },
}



export function createSlice<T, R>(slice: CreateSliceProp<T, R>): CreateSliceResponse<T, R> {
    let { initialState, name, reducers } = slice;

    let actions: any = {}

    let typeTemp: any = {}

    for (let i in reducers) {
        let type = `${name}/${i}`;
        typeTemp[i] = type
        actions[i] = (data: any) => ({ type, payload: data })
    }


    function reducer(state: T = initialState, action: any) {
        let type = action.type.split('/')[1] as keyof R

        // Default action
        if (typeof reducers[type] === 'undefined') return state;

        // call action when have
        let stateTemp = { ...state };
        let stateReturn = reducers[type](stateTemp, action)

        // check if reducer item have return item
        if (stateReturn && stateReturn !== stateTemp) return stateReturn;
        return stateTemp
    }

    let types = typeTemp


    return { actions, reducer, type: types }
}