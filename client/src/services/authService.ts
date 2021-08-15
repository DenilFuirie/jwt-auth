import $api, {API_URL} from "../http";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";

export const authService = {
    async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/api/login', {email, password})
    },

    async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/api/registration', {email, password})
    },

    async logout(): Promise<AxiosResponse<void>> {
        return $api.post('/api/logout')
    },

    async checkAuth() {
        return $api.get<AuthResponse>(`${API_URL}/api/refresh`)
    }
}