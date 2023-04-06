import React, { Component } from "react";
import { Form, Input } from "reactstrap";
import Rating from "./Rating";
import { connect } from "react-redux"

class CommentForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            comment: "",
            rating: 0
        }
    }
    comment = null;
    checked = false;
    update = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.comment = {
            dishId: this.props.selected_dish.id,
            rating: this.state.rating,
            author: this.state.name,
            date: new Date().toISOString(),
            comment: this.state.comment
        }
        this.props.addComment(this.comment);
        this.setState({
            name: "",
            comment: "",
            rating: 0
        })
    }
    rating = <Rating className="mt-3" rating={0}></Rating>
    starcolor = (event) => {
        let item = event.target;
        if (!this.checked && item.tagName === 'SPAN') {


            item.style.color = "orange"
            let sibling = (item.previousSibling);
            while (sibling != null) {
                sibling.style.color = "orange";
                sibling = sibling.previousSibling;
            }


        }

        // if (event.target.tagname)
    }
    starcolorBlack = (event) => {
        let item = event.target;
        if (!this.checked && item.tagName === 'SPAN') {
            item.style.color = "black"
            let sibling = (item.previousSibling);
            while (sibling != null) {
                sibling.style.color = "black";
                sibling = sibling.previousSibling;
            }
        }

    }
    saveRating = (event) => {
        let item = event.target;
        if (item.tagName === 'SPAN') {
            console.log(item.id)
            this.setState({
                rating: parseInt(item.id) + 1
            })
            this.checked = true;
        }
    }
    render() {

        return (
            <div>
                <hr></hr>
                <p>Leave a comment...</p>
                <Form className="mt-3">
                    <Input className="mt-3" type="text" name="name" id="name" placeholder="Your Name" value={this.state.name} onChange={this.update} required></Input>
                    <p></p>
                    <div className="stars" onMouseOver={this.starcolor} onMouseOut={this.starcolorBlack} onClick={this.saveRating}>
                        {this.rating}
                    </div>
                    <Input className="mt-3 mb-3" type="textarea" name="comment" id="comment" placeholder="Your Comment" value={this.state.comment} onChange={this.update} required></Input>
                    <Input className="btn-primary" type="button" value="Submit" onClick={this.handleSubmit}></Input>
                </Form>
            </div>
        )
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        addComment: (comment) => dispatch({ type: "ADD_COMMENT", payload: comment })

    }

}
const mapStateToProps = (state) => {
    return {
        selected_dish: state.dishSelection
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(CommentForm);