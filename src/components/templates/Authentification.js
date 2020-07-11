import React, { useState, useCallback, useEffect, useMemo } from "react";
import FooterComponent from "../organisms/FooterComponent";

const Authentification = ({ type }) => {
    const [form, setForm] = useState({
        id: "",
        password: "",
        name: "",
    });

    const [view, setView] = useState(null);

    let { id, password, name } = form;

    const changeHandler = useCallback(
        (e) => {
            setForm({
                ...form,
                [e.target.name]: e.target.value,
            });
        },
        [form]
    );

    const InputView = useMemo(() => {
        return (
            <div>
                <p>
                    <label htmlFor="id">ID</label>
                    <input
                        id="id"
                        name="id"
                        type="text"
                        value={id}
                        onChange={changeHandler}
                    />
                </p>
                <p>
                    <label htmlFor="password">password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={changeHandler}
                    />
                </p>
            </div>
        );
    }, [id, password, changeHandler]);

    const LoginView = useMemo(() => <div>{InputView}</div>, [InputView]);
    const JoinView = useMemo(
        () => (
            <div>
                {InputView}
                <p>
                    <label htmlFor="name">name</label>
                    <input
                        id="name"
                        name="name"
                        type="name"
                        value={name}
                        onChange={changeHandler}
                    />
                </p>
            </div>
        ),
        [InputView, name, changeHandler]
    );

    useEffect(() => {
        switch (type) {
            case "login":
                setView(LoginView);
                break;
            case "join":
                setView(JoinView);
                break;
            default:
                return "무상태";
        }
    }, [type, LoginView, JoinView]);

    return (
        <div>
            {view}
            <FooterComponent />
        </div>
    );
};

export default Authentification;
