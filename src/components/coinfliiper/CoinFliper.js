import React, { Component } from 'react';
import './CoinFliper.css';
import Coin from '../coin/Coin';
export default class CoinFliper extends Component {
    static defaultProps={
        coins: [
            {side : 'heads', img : 'https://jkscoinworld.com/wp-content/uploads/2018/05/2013-a.jpg'},
            {side : 'tales', img : 'https://jkscoinworld.com/wp-content/uploads/2018/05/2013-b.jpg'}
        ]
    }
    constructor(props){
        super(props);
        this.state={
            heads: 0,
            tales: 0,
            currentSide: this.props.coins[0]
        };
        this.handleFlip=this.handleFlip.bind(this);
    }
    
    handleFlip(){
        const random = Math.floor(Math.random()*2);
        this.setState({
            currentSide : this.props.coins[random]
        });
        if(random){
            this.setState(currState => {
                return {heads : currState.heads + 1}
            })
        }else{
            this.setState(currState => {
                return {tales : currState.tales + 1}
            })
        }

    }

    render(){
        return(
            <div className='coinfliper'>
                <h1>let's flip a coin</h1>
                <Coin img={this.state.currentSide.img} heads={this.state.heads} tales={this.state.tales} onClick={this.handleFlip}/>
            </div>
        )
    }
}