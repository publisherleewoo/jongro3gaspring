import React from "react";
import UserLoginTemplate from "../templates/UserLoginTemplate";
import {Layout} from "antd";
import FooterComponent from "../organisms/FooterComponent";
import imagA from "../../assets/image/motel.jpg";

const LoginPage = () => {
    return (
        <div>
            <Layout>
                <UserLoginTemplate></UserLoginTemplate>
            </Layout>
            <FooterComponent />
        </div>
    );
};

export default LoginPage;
