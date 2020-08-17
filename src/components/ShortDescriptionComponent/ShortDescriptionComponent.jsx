import React from 'react';
import './ShortDescriptionComponent.css';

class ShortDescription extends React.Component {

    constructor(props) {
        super(props);

    }

    render()
    {
        return (
            <div className="example-section container">

                <div className="about-example-section">
                    <div className="about-child container">
                        <div className="about-headline">
                            <h2>Лучший способ связи с сайтом</h2>
                        </div>

                        <div className="about-product container">         
                            <p>
                                Добавьте чат на вашем сайте и отвечайте<br/> на сообщения ваших клиентов
                                напрямую<br/> во ВКонтакте или Телеграмме.
                            </p>

                        </div>

                        <div className="connect-buttons">
                            <button><a href="https://dashboard.biquad.ru/login?start_with=telegram"><i class="fab fa-telegram-plane"></i> Начать с телеграмм</a></button>
                        </div>
                    </div>
                </div>

                <div className="phone-example-section">
                <img src={process.env.PUBLIC_URL + '/iphone.png'} alt="logo" />
                    </div>
                </div>
         
                            
        );
    }
}

export default ShortDescription;