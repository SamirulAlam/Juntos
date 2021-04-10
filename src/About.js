import React from 'react';
import "./About.css"

function About() {
    return (
        <div className="about">
            <div className="about__container">
                <div className="about__left">
                    <img src="https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-g4bflmnbi4coegebsi9036ohp2-20200715191330.jpeg" alt=""/>
                </div>
                <div className="about__right">
                    <div className="about__title">
                        <h1>ABOUT US</h1>
                    </div>
                    <div className="about__paragraph">
                        <p>We are JUNTOS. We are a non-profit aimed to help people who are affected by natural calamities. Their government cant reach all of the people. Help from their neighboring country is not enough. So its time for you to step ahead. You can join in the huge helping society. We want to bring more joy into their lives with our services, as well as convenience.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
