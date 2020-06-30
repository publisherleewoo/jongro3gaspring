import React from "react";
import { Row, Col } from "react-bootstrap";

export default (props) => {
    return (
        <Row xs={12}>
            <Col xs={12}>
                <h1>레이아웃2</h1>
            </Col>
            <Col xs={12}>{props.children}</Col>
        </Row>
    );
};
