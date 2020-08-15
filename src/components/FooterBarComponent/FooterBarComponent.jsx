import React from 'react';
import './FooterBarComponent.css';



class FooterBar extends React.Component {
    
    constructor(props) {  
        super(props);    
        this.nowDate = new Date();
    }  

    render()
    {
        return(
            <div className="footer">
                Copyright {this.nowDate.getFullYear()} All rights reserved <a href="biquad.ru">Biquad.ru</a>
            </div>

        );
    }

}


export default FooterBar;