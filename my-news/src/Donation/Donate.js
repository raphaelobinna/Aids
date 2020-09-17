import React, { Component } from 'react';
import Modal from '../Modal/Modal';
//import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';
import './Donate.css'

class donate extends Component{

    state = {
        last : '',
        first : '',
        Gender : 'Female',
        email : '',
        amount : '',
        currency : 'DOLLAR',
        mode : 'Card Payment',
        purchasing : false,
        loading : false
    }

    onLastNameHandler = event => {
        this.setState({
            last : event.target.value
        })
    };

    onFirstNameHandler = event => {
        this.setState({
            first : event.target.value
        })
    };

    onGenderHandler = event => {
        this.setState({
            Gender : event.target.value
        })
    };

    onEmailHandler = event => {
        this.setState({
            email : event.target.value
        })
    };

    onAmountHandler = event => {
        this.setState({
            amount : event.target.value
        })
    };

    onCurrencyHandler = event => {
        this.setState({
            currency : event.target.value
        })
    };

    onModeHandler = event => {
        this.setState({
            mode : event.target.value
        })
    };

    onsubmitHandler = (event) => {
        this.setState({
            purchasing : true
        });
        event.preventDefault()

    };

    orderCancelPurchaseHandler = () => {
        this.setState({
            purchasing : false
        })
    };

    orderContinueHandler = () => {
        this.setState({
            loading : true
        })
    }


    render () {
        let spinner = ( <Modal 
        show={this.state.purchasing}
        modalClosed={this.orderCancelPurchaseHandler}>
            <h3>Your Name : {this.state.last} {this.state.first}</h3>
             <p>GENDER : {this.state.Gender}</p>
             <p>E-mail : {this.state.email}</p>
             <p>Amount To Donate : {this.state.amount} </p>
             <p>CURRENCY : {this.state.currency}</p>
             <p>Mode Of Payment : {this.state.mode}</p>
            <Button class="Danger" clicked={this.orderCancelPurchaseHandler}>Cancel</Button>
            <Button class="Success"clicked={this.orderContinueHandler}>Continue</Button>
        </Modal> 
        )

        if (this.state.loading) {
            spinner = <p><b>Thanks For Your Support!</b></p>
        }

        return (
            <div class="mat">
                <div>
               {spinner}
                </div>
                <div >
                <form onSubmit={this.onsubmitHandler} class="form">
                    <div class="dave">
                        <label class="label">Last Name : </label>
                        <input type="text"  class="input" value={this.state.last} onChange={this.onLastNameHandler} />
                    </div>
                    <div class="dave">
                        <label class="label">First Name : </label>
                        <input type="text" class="input" value={this.state.first} onChange={this.onFirstNameHandler} />
                    </div>
                    <div class="dave">
                    <label class="label">Gender : </label>
                        <select value={this.state.Gender} onChange={this.onGenderHandler}>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </select>    
                    </div>
                    
                    <div class="dave">
                        <label for="e-mail" class="label">E-mail : </label>
                        <input type="text" class="input" value={this.state.email} onChange={this.onEmailHandler} />
                    </div>
                    <div class="dave">
                        <label class="label">Amount : </label>
                        <input type="text" class="input" value={this.state.amount} onChange={this.onAmountHandler} />
                    </div>
                    <div class="dave">
                        <label class="label">Currency : </label>
                        <select value={this.state.currency} onChange={this.onCurrencyHandler}>
                            <option value="NAIRA">NAIRA</option>
                            <option value="DOLLAR">DOLLAR</option>
                            <option value="EURO">EURO</option>
                            <option value="POUNDS">POUNDS</option>
                        </select>
                    </div>
                    <div class="dave">
                        <label class="label">Mode of Payment : </label>
                        <select value={this.state.mode} onChange={this.onModeHandler}>
                            <option value="Card Payment">CARD PAYMENT</option>
                            <option value="Bank Transfer">BANK TRANSFER</option>
                        </select>
                    </div>
                    
                    <button type="submit" class="Button">DONATE</button>
                    
                </form>
                </div>
                
            </div>
        )
    }
};

export default donate;