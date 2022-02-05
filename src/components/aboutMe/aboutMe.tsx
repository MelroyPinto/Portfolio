import React from 'react';
import PropTypes from 'prop-types';
import styles from './aboutMe.module.scss';
import cx from 'classnames';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import { Images } from '~/src/utils/icon.constant';
import { socialIcons } from '~/src/common/socialIcons';
import { hobbies, siteConst } from '~/src/utils/constants';

const AboutMe = () => {
    return (
        <div className={cx(styles.paddingTop, 'container')}>
            <div className={styles.profileContainer}>
                <Row>
                    <Col lg={{ span: 3 }} className={styles.alignCenter}>
                        <Image src={Images.profilePic} alt="Logo" className={styles.profilePic} width="150" height="150" />
                        <p className={styles.userName}>Melroy Glan Pinto</p>
                        {socialIcons(styles.mtMB)}
                    </Col>
                    <Col lg={{ span: 9 }}>{siteConst.aboutMe}</Col>
                </Row>
            </div>
            <div className={styles.marginTop}>
                <Row>
                    {hobbies.map((hobby) => (
                        <Col lg={{ span: 3 }} className={cx(styles.alignCenter, styles.paddingTopBottom)} key={hobby.key}>
                            <div className={styles.hobbiesContainer}>
                                <Image src={Images.profilePic} alt="Logo" className={styles.profilePic} width="100" height="100" />
                                <p className={styles.userName}>Melroy Glan Pinto</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

AboutMe.propTypes = {};

export default AboutMe;
