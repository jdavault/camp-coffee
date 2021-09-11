import React from "react"
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';  
import "../App.css";


class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNum: '', 
            message: '',          
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(firstName, lastName,  email, phoneNum) {

        const errors = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNum: ''
            
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'First name must be 15 or less characters.';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = 'Last name must be at least 2 characters.';
            } else if (lastName.length > 15) {
                errors.lastName = 'Last name must be 15 or less characters.';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'The phone number should contain only numbers.';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }

        return errors;
    }    


    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }


    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }


    render() {

        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);

        return (
            <>
                <aside id="sidebar">
                    <div className="dark">
                    <h3>Contact Us</h3>
                    <Form className="contactForm" onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <label htmlFor="firstName">First Name</label>
                            <Input type="text" id="firstName" name="firstName"
                                placeholder="First Name"
                                value={this.state.firstName}
                                invalid={errors.firstName}
                                onBlur={this.handleBlur("firstName")}
                                onChange={this.handleInputChange} />
                            <FormFeedback>{errors.firstName}</FormFeedback>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input type="text" id="lastName" name="lastName"
                                placeholder="Last Name"
                                value={this.state.lastName}
                                invalid={errors.lastName}
                                onBlur={this.handleBlur("lastName")}
                                onChange={this.handleInputChange} />
                            <FormFeedback>{errors.lastName}</FormFeedback>                                                       
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email">Email</Label>                                
                            <Input type="email" id="email" name="email"
                                placeholder="Email"
                                value={this.state.email}
                                invalid={errors.email}
                                onBlur={this.handleBlur("email")}
                                onChange={this.handleInputChange} />
                            <FormFeedback>{errors.email}</FormFeedback>                               
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="phoneNum">Phone</Label>                                
                            <Input type="tel" id="phoneNum" name="phoneNum"
                                placeholder="Phone number"
                                value={this.state.phoneNum}
                                invalid={errors.phoneNum}
                                onBlur={this.handleBlur("phoneNum")}
                                onChange={this.handleInputChange} />
                            <FormFeedback>{errors.phoneNum}</FormFeedback>                                
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="address">Adress</Label>
                            <textarea placeholder="address"></textarea>                               
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message">Message</Label>
                            <Input type="textarea" id="message" name="message"
                                value={this.state.message}
                                onChange={this.handleInputChange}></Input>
                        </FormGroup>
                        <FormGroup row>
                            <Button className="button" type="submit">
                            Send
                            </Button>
                        </FormGroup>
                    </Form>
                    </div>
                </aside>               
            </>
        )
    }
}

export default ContactForm
