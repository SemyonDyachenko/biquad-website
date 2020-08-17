import React from 'react';
import './GetstartedComponent.css';

class GetStarted extends React.Component {

    render()
    {
        return(
            <div class="getstarted-container container">
                <div className="getstarted-headline">
                    <h1>Начни использовать Biquad для своего сайта<br/>сейчас бесплатно</h1>
                </div>
                <div className="getstarted-buttons">
                    <button><a href="https://dashboard.biquad.ru/login?start_with=telegram"><i class="fab fa-telegram-plane"></i> Начать с телеграмм</a></button>
                </div>
            </div>

        );  
    }
}


export default GetStarted;