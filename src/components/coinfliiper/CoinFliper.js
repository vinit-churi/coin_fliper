import React, { Component } from 'react';
import './CoinFliper.css';
import Coin from '../coin/Coin';
export default class CoinFliper extends Component {
    render(){
        return(
            <div className='coinfliper'>
                <Coin/>
            </div>
        )
    }
}