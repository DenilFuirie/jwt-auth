import $api from "../http";
import {IUser} from "../models/IUSER";
import { AxiosResponse } from "axios";


export const userService = {
    fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/api/users')
    }
}