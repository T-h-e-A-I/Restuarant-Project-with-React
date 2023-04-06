import React, { Component } from 'react';
import Spinner from 'react-easy-spinner';
class Loading extends Component {
    render() {
        let settings = {
            shape: "loader",
            animation: "spin",
            time: "2s",
            duration: 'infinite',
            opacity: '0.3',
            bgColor: 'white',
            elColor: 'skyblue'
        }
        return (
            <div className="App">
                <Spinner {...settings} />
            </div>
        );
    }
}
export default Loading;