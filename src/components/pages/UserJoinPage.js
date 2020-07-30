import React from "react";

import { Container } from "react-bootstrap";
import FooterComponent from "../organisms/FooterComponent";
import UserJoinTemplate from "../templates/UserJoinTemplate";

const JoinPage = () => {
    return (
        <div>
            <Container style={{}}>
                <UserJoinTemplate></UserJoinTemplate>
            </Container>
            <FooterComponent />
        </div>
    );
};

export default JoinPage;
