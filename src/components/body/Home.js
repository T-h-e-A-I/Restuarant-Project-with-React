import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
class Home extends Component {
    componentDidMount() {
        document.getElementById("home").classList.add("active")
        document.getElementById("about").classList.remove("active")
        document.getElementById("menu").classList.remove("active")
        document.getElementById("contact").classList.remove("active")
    }

    render() {
        document.title = "Home"
        return (
            <div></div>
        )
    }
}

export default (Home);