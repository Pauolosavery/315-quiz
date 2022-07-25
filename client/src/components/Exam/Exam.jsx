import { useRef } from "react";
import { useState, useReducer, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateUserAC } from "../../redux/actionCreators/userAC";

export default function Exam() {
    const [step, setStep] = useState(1);
    const [gram, setGram] = useState(0);
    const [nickname, setNickname] = useState('');
    // reducer на изменение имени юзера
    // const [state, dispatch] = useReducer(reducer, state={user: 'Old_nickname'});
    // dispatch({type: "USER_EDIT", payload: "New_Nickname"})
    useEffect (()=>{
        console.log('Nickname changed');
    }, [nickname]);

    useEffect (()=>{
        console.log('Nickname mounted');
        return (()=> console.log('Nickname deleted'));
    }, []);

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);
    const inputEl = useRef(null);
    return (
        <div>
            <label>Введи начальное значение</label>
            <br />
            <input
                defaultValue={step}
                onChange={(e) => setGram(Number(e.target.value))}
                ref={inputEl} type="text"
            />
            <br />
            <label>Введи сколько добавить жару</label>
            <br />
            <input
                value={step}
                onChange={(e) => setStep(Number(e.target.value))}
            />
            <p>
                Я наготовил битов, чтобы потом, слова изо ртов вылетали и ложились пластом!
            </p>
            <p>На текущий момент завезли {gram} старых грам-записей {gram ? "😎" : "😢"}
            </p>
            <button
                onClick={() => setGram(gram + step)}
            >
                ДОБАВЬ ЖАРУ, БРАТ!
            </button>
            <br />
            <br />
            <button
                onClick={() => {
                    setGram(0);
                    setStep(0);
                    inputEl.current.value = 0
                }}
            >
                ПО ГОЛОВЕ СЕБЕ ПОСТУЧИ
            </button>
            <br />
            <br />
            <label
            style={{backgroundColor: "white"}}
            >
                {user.nickname || 'Кто ты воин?'}
            </label>
            <br />
            <input
                name="input"
                defaultValue={nickname}
                onChange={(e) => setNickname(e.target.value)}
                type="text"
            />
            <br />
            <button
                onClick={() => dispatch(updateUserAC(nickname))
                }
            >
                СМЕНИ РЖАВЫЕ НОЖИ НА КИНЖАЛЫ
            </button>
        </div>

    )
}