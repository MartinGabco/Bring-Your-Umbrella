import React from 'react';

// styles
import '../style/Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="umbrella"></div>
            <div className="main_text">
                <h1 className="main-header">Bring your umbrella</h1>
                <section className="first">
                    <p>The weather is sometimes absolutely and horribly changeable. You cannot know, if and when beautiful sunny weather is suddenly replaced with dark clouds and strong rain.</p>
                </section>
                <section className="second">
                    <p>The aim of this app is to warn you, if in next twenty hours will rain (of various intensity) occur icertaubn current place, where you actually are. Further you can find here exactly sorted informations about current weather in town, localised by geolocation tool.</p>
                </section>
                <section className="third">
                    <p>Third part of "Weather Forecast" subpage in focused on showing forecast for next seven days including rain situation and day temperature. If rain is expected, this fact will be marked by special umrella icon occurring only in this certain case. When you want to get notification with short rain-focused forecast, you can in section "My mail notification" subscribe with your name and email address.</p>
                </section>
            </div>
            <div className="nature_beauty"></div>
        </div>
    );
}
 
export default Home;