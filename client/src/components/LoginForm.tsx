import React, {FC, useState} from 'react';
import {authService} from "../services/authService";
import {useDispatch, useSelector} from "react-redux";
import {userService} from "../services/userService";

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {isAuth, user} = useSelector((state: { authReducer: any; }) => state.authReducer)

    const [users, setUsers] = useState<object[]>([
        {email: '123@mail.ru'}
    ])

    const dispatch = useDispatch();

    const reg = () => {
        authService.registration(email, password)
            .then(r => {
                localStorage.setItem('token', r.data.accessToken)
                dispatch({
                    type: 'REGISTRATION',
                    payload: r.data.user
                })
            })
        alert(`На почту ${email} было отправлено письмо для потверждения!`)
    }

    const login = () => {

        authService.login(email, password)
            .then(r => {
                localStorage.setItem('token', r.data.accessToken)
                dispatch({
                    type: 'SET_USER_DATA',
                    payload: r.data.user
                })
            })
    }

    const logout = () => {
        authService.logout()
        dispatch({
            type: 'LOG_OUT'
        })
    }

    const getUsers = () => {
        userService.fetchUsers()
            .then((r:any) => console.log(r))
    }

    console.log(email, password)
    return (
        <div>
            {!isAuth ?
                <>
                    <input
                    onChange={e => setEmail(e.target.value)}

                    value={email}
                    type="text"
                    placeholder="Email"/>

                    <input
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Пароль" />
                    <button onClick={() => login()}>Логин</button>
                    <button onClick={() => reg()}>Регистрация</button>
                </>
                :
                <>
                    <button onClick={() => logout()}>Выйти</button>
                    <button onClick={() => getUsers()}>Получить пользователей</button>

                    <div>{users.map((item:any) => item.email)}</div>
                </>

            }

        </div>
    );
};

export default LoginForm;