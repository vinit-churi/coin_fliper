import React, { Component } from 'react';
import './Coin.css';

export default class Coin extends Component{
    render(){
        return(
            <div className='coin'>
                <div className='image_container'>
                    <img src={this.props.img} alt='coin'/>
                </div>
                <div>
                    <button onClick={this.props.onClick}>flip!</button>
                    <h3>{`counter: ${this.props.heads + this.props.tales} heads: ${this.props.heads} tales: ${this.props.tales}`}</h3>
                </div>
            </div>
        )
    }
}