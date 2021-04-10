import React from 'react';
import "./Home.css";
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <div className="home__text">
                <div className="home__title">
                    <h1>JUNTOS</h1>
                </div>
                <div className="home__description">
                    <p>You are so lucky that you are able to sit in front of your computer and visit this website. But a lot of the people in the other corner of the world are probably leading the hardest time of their life. They need your help. Do you want to help them??? </p>
                </div>
                <div className="home__button">
                    <Link to="/event">
                        <Button>I want to help</Button>
                    </Link>
                </div>
            </div>
            <div className="home__left">
                <img src="https://lh3.googleusercontent.com/proxy/9Wi1ipvuffAR4JuavQ2b1Ybxx4c89DDjMo8oJzbJch_fHHSqdAdsXR6b0VhE5CYYK_pdyiHo79stWyblBXspgeJUt2IN4rHJvgpovoHWUmnEe-KaQz76GUWgvjOZL6vTyw" alt=""/>
            </div>
            <div className="home__middle">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5CbAW2BClXJWudW9ogsn3hewd5Bvel_7UA&usqp=CAU" alt=""/>
            </div>
            <div className="home__right">
                <img src="http://dickiefloydnovels.com/wp-content/uploads/2018/02/Earthquake-1024x683.jpg" alt=""/>
            </div>
        </div>
    )
}

export default Home
