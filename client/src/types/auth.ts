import {IUser} from "../models/IUSER";

export enum ActionsTypes {
    SET_USER_DATA = "SET_USER_DATA",
    REGISTRATION = "REGISTRATION",
    LOG_OUT = "LOG_OUT"

}

// интерфейс всего редьюсера
export interface authState {
    user : IUser
    isAuth: boolean;

}

// интерфейса экшена
export interface logIn {
    type: ActionsTypes.SET_USER_DATA;
    payload: { isAuth: boolean, user: IUser[]};
}

export interface registration {
    type: ActionsTypes.REGISTRATION;
    payload: { isAuth: boolean, user: IUser[]};
}

export interface logOut {
    type: ActionsTypes.LOG_OUT;
    payload: { isAuth: boolean };
}


export type authActions = logIn | registration | logOut;
