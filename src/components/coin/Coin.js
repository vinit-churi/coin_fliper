import React, { Component } from 'react';
import './Coin.css';

export default class Coin extends Component{
    render(){
        return(
            <div className='coin'>
                <div className='image_container'>
                    <img src={this.props.img} alt='coin'/>
                </div>
            </div>
        )
    }
}