import e from 'express';
import React from 'react';
import Link from 'react-router-dom';

class Login extends React.Compoment {
    constructor(props){
        super(props);
        this.state = {
            email: ' ',
            password: ' ',
            firstName: ' ',
            lastName: ' ',
            newUser: false
        }
    }

    toggle = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        const { email, password } = this.state;
        
    }
}