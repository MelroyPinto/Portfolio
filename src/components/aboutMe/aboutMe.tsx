import React from 'react';
import PropTypes from 'prop-types';
import styles from './aboutMe.module.scss';
import cx from 'classnames';
import Image from 'next/image';
import { Row, Col, Card } from 'react-bootstrap';
import { Images } from '~/src/utils/icon.constant';
import { socialIcons } from '~/src/common/socialIcons';
import { hobbies, siteConst, skills } from '~/src/utils/constants';

const AboutMe = () => {
    return (
        <div className={cx(styles.paddingTop, 'container')}>
            <div className={styles.profileContainer}>
                <h1>About Me</h1>
                <Row>
                    <Col lg={{ span: 3 }} className={styles.alignCenter}>
                        <Image src={Images.profilePic} alt="Logo" className={styles.profilePic} width="150" height="150" />
                        <p className={styles.userName}>Melroy Glan Pinto</p>
                        {socialIcons(styles.mtMB)}
                    </Col>
                    <Col lg={{ span: 9 }}>{siteConst.aboutMe}</Col>
                </Row>
                <div className={styles.marginTop}>
                    <h2>My Skills</h2>
                    <Row>
                        {skills.map((skill) => (
                            <Col lg={{ span: 4 }} className={cx(styles.alignCenter, styles.paddingTopBottom)} key={skill.key}>
                                <div className={styles.hobbiesContainer}>
                                    <Image src={skill.img} alt="Logo" height={skill.height} width={skill.width} />
                                    <p className={styles.userName}>{skill.title}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className={styles.marginTop}>
                    <h3>Below are the things give me Inner Peace</h3>
                    <Row>
                        {hobbies.map((hobby) => (
                            <Col lg={{ span: 4 }} className={cx(styles.alignCenter, styles.paddingTopBottom)} key={hobby.key}>
                                {/* <div className={styles.hobbiesContainer}>
                                    <Image src={Images.profilePic} alt="Logo" width={100} height="100" />
                                    <p className={styles.userName}>{hobby.title}</p>
                                </div> */}
                                <Card>
                                    <Image src={Images.profilePic} alt="Logo" width={100} height="250" className={styles.hobbies}/>
                                    <Card.Body>
                                        <Card.Title>{hobby.title}</Card.Title>
                                        <Card.Text>
                                            {hobby.desc}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};

AboutMe.propTypes = {};

export default AboutMe;
