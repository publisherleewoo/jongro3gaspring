import React from "react";

import FooterComponent from "../organisms/FooterComponent";
import UserJoinTemplate from "../templates/UserJoinTemplate";
import { Layout } from "antd";

const JoinPage = () => {
    return (
        <div>
            <Layout>
                <UserJoinTemplate></UserJoinTemplate>
            </Layout>
            <FooterComponent />
        </div>
    );
};

export default JoinPage;
