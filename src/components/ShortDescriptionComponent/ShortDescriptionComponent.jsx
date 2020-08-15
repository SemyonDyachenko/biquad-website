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
                            <button><a href="dashboard.biquad.ru/login?start_with=telegram"><i class="fab fa-telegram-plane"></i> Начать с телеграмм</a></button>
                        </div>
                    </div>
                </div>

                <div className="phone-example-section">
                        <div className="iphone-x">
                            <div className="messagebox">
                                <div className="sms-mini-box sms-box-120-45">
                                    <h5>Hello</h5>
                                </div>

                                <div className="sms-mini-box sms-box-120-85">
                                    <h5>Hello</h5>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
                            
        );
    }
}

export default ShortDescription;