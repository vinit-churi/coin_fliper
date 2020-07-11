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
            counter: 0,
            heads: 0,
            tales: 0,
            currentSide: this.props.coins[0]
        };
        this.handleFlip=this.handleFlip.bind(this);
    }
    
    handleFlip(){
        const random = Math.floor(Math.random()*2);
        // console.log(random);
        this.setState({
            currentSide : this.props.coins[random]
        });
        this.setState(currState => {
            return {counter : currState.counter + 1}
        })
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
                <Coin img={this.state.currentSide.img}/>
                <button onClick={this.handleFlip}>flip!</button>
                <h3>{`heads: ${this.state.heads} tales: ${this.state.tales} counter: ${this.state.counter}`}</h3>
            </div>
        )
    }
}