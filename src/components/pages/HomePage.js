import React, {useEffect} from "react";

import {useSelector, useDispatch} from "react-redux";
import {plusAction} from "../../actions/testAction";

import {Button} from "react-bootstrap";
import HeaderComponent from "../organisms/HeaderComponent";
import FooterComponent from "../organisms/FooterComponent";

import imagA from '../../assets/image/motel.jpg'

const HomePage = () => {
    const reduxState = useSelector((state) => state.testReducer);
    const dispatch = useDispatch();
    console.log(reduxState);
    useEffect(() => {
        dispatch(plusAction());
    }, [dispatch]);

    return (
        <div style={style.main}>
            <HeaderComponent className="py-5"/>
            <section className="py-5" >
            <div className="container">
                <h1>홈</h1>
                <table border="1" style={{textAlign: "center"}}>
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
            </div>
            </section>
            <section className="py-5" >
                <div className="container">
                    <h1>Section Heading</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis
                        repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit
                        vel itaque amet.</p>
                </div>
                <div className="container">
                    <h1>Section Heading</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis
                        repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit
                        vel itaque amet.</p>
                </div>
                <div className="container">
                    <h1>Section Heading</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis
                        repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit
                        vel itaque amet.</p>
                </div>
            </section>
            <FooterComponent/>
        </div>
    );
};

export default HomePage;

const style = {
    main: {
        backgroundImage: "url("+imagA+")",
        height: '100%'
    }
}
