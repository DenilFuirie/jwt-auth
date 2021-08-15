import React, {FC, useEffect, useState} from 'react';
import LoginForm from "./components/LoginForm";
import {authService} from "./services/authService";
import {useDispatch, useSelector} from "react-redux";
import {userService} from "./services/userService";

const App: FC = () => {
    const {isAuth, user} = useSelector((state: { authReducer: any; }) => state.authReducer)
    const dispatch = useDispatch();

    useEffect(() => {

        let token = localStorage.getItem('token');
            try {
                authService.checkAuth().then(r => {
                    localStorage.setItem('token', r.data.accessToken)
                    dispatch({
                        type: 'SET_USER_DATA',
                        payload: r.data.user
                    })
                })
            } catch (e) {
                console.log(e)
            }
            console.log(token)
    }, [])
    return (
        <div className="App">
            {isAuth && <>
                <h1>Вы вошли!</h1>
                <p>Ваш email: {user.email} </p>
            </>
            }
            <LoginForm/>

        </div>
    );
}

export default App;
