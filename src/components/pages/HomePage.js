import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { plusAction } from "../../actions/testAction";

import { Button } from "react-bootstrap";
import HeaderComponent from "../organisms/HeaderComponent";
import FooterComponent from "../organisms/FooterComponent";

const HomePage = () => {
    const reduxState = useSelector((state) => state.testReducer);
    const dispatch = useDispatch();
    console.log(reduxState);
    useEffect(() => {
        dispatch(plusAction());
    }, [dispatch]);

    return (
        <div>
            <HeaderComponent />
            <h1>홈</h1>
            <table border="1" style={{ textAlign: "center" }}>
                <tbody>
                    <tr>
                        <th> 리덕스,사가 연동확인</th>
                        <td>{reduxState}</td>
                    </tr>
                    <tr>
                        <th> 부트스트랩 연동 확인</th>
                        <td>
                            <Button>버튼</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterComponent />
        </div>
    );
};

export default HomePage;
