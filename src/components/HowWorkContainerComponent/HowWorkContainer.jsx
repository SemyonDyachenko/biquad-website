import React from 'react';
import './HowWorkContainer.css';

class HowWorkContainer extends React.Component {

    render()
    {
        return(
            <div className="tutorial-container container">
            <div class="longabout-container container">
                <div className="row">
                    <div className="col">
                        <div className="icon-container-large">
                        <i class="fas fa-comments"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tutorial-headline">
                <h1>Как это работает?</h1>
            </div>
                <div class="video-tutorial">
                <iframe width="760" height="415" src="https://www.youtube.com/embed/vDKt5p8qY94" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>
        );
    }
}

export default HowWorkContainer;