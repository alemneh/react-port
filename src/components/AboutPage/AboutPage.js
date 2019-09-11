import React from 'react';
import {Row, Col} from 'react-flexbox-grid/lib';
import Scroll from 'react-scroll';
import ChevronButton from '../ChevronButton/ChevronButton';

import styles from './AboutPage.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Profile from '../../images/profile.jpg';
import ContactPage from '../ContactPage/ContactPage';

const Link       = Scroll.Link;
const Element    = Scroll.Element;

const About = () => {
  return (
    <div>
      <div className={styles.about}>
        <SectionTitle title={"About Me"} />
        <Row>
          <Col xs={12} sm={6} md={5} lg={5}>
            <img className={styles.pictureCard} src={Profile} />
          </Col>
          <Col xs={12} sm={6} md={7} lg={7}>
            <div className={styles.aboutMeText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun
              </p>
            </div>
          </Col>
          <Col xs={12}>
            <Link className="Contact" to="Contact" smooth={Boolean(true)} duration={500} ><ChevronButton /></Link>
          </Col>
        </Row>
      </div>
      <Element name="Contact" className="element">
        <ContactPage />
      </Element>
    </div>
  );
};

export default About;
