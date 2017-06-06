import React from 'react';

import Header from './Header';
import Footer from "./Footer";

class Layout extends React.Component {

    constructor() {
        super();
        this.state = {name: "simpleasABC"};
    }

    render() {
        setTimeout( () => {
            this.setState({name: "Hello world."});
            }, 3000);
        return (
            <div>
                <h1>{this.state.name}</h1>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default Layout;
