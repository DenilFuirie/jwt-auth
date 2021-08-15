import {ActionsTypes, authState, authActions} from "../../types/auth";
import {IUser} from "../../models/IUSER";

let initialState: authState = {
    user: {} as IUser,
    isAuth: false,
};

export const authReducer = (
    state = initialState,
    action: authActions
): authState => {
    switch (action.type) {
        case ActionsTypes.SET_USER_DATA: {
            //@ts-ignore
            return {...state, user: action.payload, isAuth: true};
        }
        case ActionsTypes.REGISTRATION: {
            //@ts-ignore
            return {...state, user: action.payload, isAuth: true};
        }
        case ActionsTypes.LOG_OUT: {
            return {...state, isAuth: false};
        }

        default:
            return state;
    }
};