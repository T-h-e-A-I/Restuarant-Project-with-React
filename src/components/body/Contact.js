import React, { Component } from "react";
import { Alert, FormGroup, Input, Label, Button } from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form"
import axios from "axios";
class Contact extends Component {
    componentDidMount() {

        document.getElementById("contact").classList.add("active")
        document.getElementById("about").classList.remove("active")
        document.getElementById("menu").classList.remove("active")
        document.getElementById("home").classList.remove("active")
    }
    constructor() {
        super();
        this.state = {
            alertShow: false,
            alertType: null,
            alertText: null
        }
    }

    handleInput = (values) => {
        console.log(values);
        axios.post("http://localhost:3001/feedback", values).then(response => response.status).then(
            status => {
                if (status === 201) {
                    this.setState({
                        alertShow: true,
                        alertType: "success",
                        alertText: "Submitted Successfully"
                    })
                } else {
                    this.setState({
                        alertShow: true,
                        alertType: "danger",
                        alertText: "Submission Failed"
                    })
                }
            }
        ).catch(error => console.log(error.message))
    }
    render() {
        const required = val => (val && val.length);
        const isNum = val => !isNaN(val);
        const isEmail = val => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)
        document.title = "Contact"
        return (
            <div className="container justify-content-center align-items-left">
                <Alert className="mt-3" color={this.state.alertType} isOpen={this.state.alertShow} >
                    {this.state.alertText}
                </Alert>
                <LocalForm onSubmit={(values) => this.handleInput(values)}>
                    <h1 className="m-4">Send Us your feedback</h1>
                    <FormGroup>
                        <div className="row">
                            <div className="col-2">
                                <Label for="fname">
                                    First Name
                                </Label>
                            </div>
                            <div className="col-10">
                                <Control.text model=".fname" name="fname" className="form-control" validators={{ required }} />
                                <Errors className="text-danger" model=".fname" show="touched" messages={{ required: "Required field, " }}></Errors>
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="row">
                            <div className="col-2">
                                <Label for="lname">
                                    Last Name
                                </Label>
                            </div>
                            <div className="col-10">
                                <Control.text model=".lname" name="lname" className="form-control" validators={{ required }} />
                                <Errors className="text-danger" model=".lname" show="touched" messages={{ required: "Required field" }}></Errors>
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="row">
                            <div className="col-2">
                                <Label for="email">
                                    Email
                                </Label>
                            </div>
                            <div className="col-10">
                                <Control.text model=".email" name="email" className="form-control" validators={{ required, isEmail }} />
                                <Errors className="text-danger" model=".email" show="touched" messages={{ required: "Required field, ", isEmail: " Input Must be an Email" }}></Errors>
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="row">
                            <div className="col-2">
                                <Label for="contact">
                                    Contact No
                                </Label>
                            </div>
                            <div className="col-10">
                                <Control.text model=".contact" name="contact" className="form-control" validators={{ required, isNum }} />
                                <Errors className="text-danger" model=".contact" show="touched" messages={{ required: "Required field, ", isNum: " Input Must be a Number" }}></Errors>
                            </div>

                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="row">
                            <div className="col-2">
                            </div>
                            <div className="col-5">
                                <p><b>May we contact you? </b>
                                    <Control.checkbox model=".check" name="check" className="form-check-input" />
                                </p>

                            </div>
                            <div className="col-5">
                                <Control.select model=".select" name="select" className="form-select">
                                    <option>Telephone</option>
                                    <option>Email</option>
                                </Control.select>
                            </div>

                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="row">
                            <div className="col-2">
                                <Label for="feedback">
                                    Feedback
                                </Label>
                            </div>
                            <div className="col-10 h-5">
                                <Control.textarea model=".feedback" name="feedback" rows="10" className="form-control" validators={{ required }} />
                                <Errors className="text-danger" model=".lname" show="touched" messages={{ required: "Required field" }}></Errors>
                            </div>
                        </div>
                    </FormGroup>
                    <Button color="primary" className="mb-3" >
                        Submit Feedback
                    </Button>

                </LocalForm>
            </div>
        );
    }
}
export default Contact;