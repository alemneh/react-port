import React from 'react';
import {Row, Col} from 'react-flexbox-grid/lib';

import styles from './ContactLinks.css';

const ContactLinks = () => {
    return (
      <Row>
        <Col xsOffset={0} xs={6} sm={2} smOffset={2} md={2} mdOffset={2} lg={2} lgOffset={2}>
          <a className="btn btn-social-icon btn-google">
            <span className="fa fa-google" />
            </a>
        </Col>
        <Col xs={6} sm={2} md={2} lg={2}>
          <a className="btn btn-social-icon btn-github">
            <span className="fa fa-github" />
          </a>
        </Col>

        <Col xs={6} sm={2} md={2} lg={2}>
          <a className={"btn btn-social-icon btn-facebook"} >
            <span className="fa fa-facebook" />
          </a>
        </Col>
        <Col xs={6} sm={2} md={2} lg={2}>
          <a className="btn btn-social-icon btn-twitter">
            <span className="fa fa-twitter" />
          </a>
        </Col>
      </Row>
    );
};

export default ContactLinks;
