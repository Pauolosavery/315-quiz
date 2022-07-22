import React from 'react';
import {useDispatch} from 'react-redux'
import { regUserAC } from '../../redux/actionCreators/userAC';

function Registration(){
    const dispatch = useDispatch();
    const regUser = (e) => {
        e.preventDefault();
        const body = {
            name: e.target.username.value,
            password: e.target.password.value,
        }
        fetch('/reg', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(body)
        })
        .then(res =>res.json())
        .then(data=>dispatch(regUserAC(data)))
    }
    return (
        <form onSubmit={regUser} className="reg form-floating mb-3" >
        <h3>
        Регистрация
        </h3>
        <br/>
        <div className="error"></div>
        <br/>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" name="username" maxLength="20" required />
            <label htmlFor="username">Имя</label>
            <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                Должно быть не длиннее 20 символов.
                </span>
            </div>
        </div>
        <div className="form-floating mb-3">
            <input type="password" className="form-control" name="password" id="password" minLength="8" maxLength="20" required />
            <label htmlFor="password">Пароль</label>
            <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                Длинна пароля 8-20 символов.
                </span>
            </div>
        </div>
        <div className="form-floating mb-3">
            <input type="password" className="form-control" name="password2" id="password2" minLength="8" required />
            <label htmlFor="password2">Повторите пароль</label>
        </div>
        <br />
        <button type="submit" className="btnReg btn-info">Зарегистрироваться</button>
    </form>
    )
};

export default Registration;