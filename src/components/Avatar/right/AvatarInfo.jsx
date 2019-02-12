import React from "react";
import {Form, Label, Segment, Button } from "semantic-ui-react";

class AvatarInfo extends React.Component {

    state = {
        data: {
            firstName: "",
            lastName: "",
            sex: "",
            age: ""
        }
    }

    onInputChange = (event) => {
        this.setState({
            data: {...this.state.data, [event.target.name]: event.target.value}
        })
    }

    handleClick = (event) => {
        this.setState({
            data: {...this.state.data, [event.target.name]: event.target.value}
        })
    }

    handleSubmit = () => {
        this.props.addNewCard(this.state.data)
    }


    render() {
        return(
         <Segment clearing className="avatar-form" >
             <h2 style = {{color: "purple"}} >Enter Your Info Here</h2>
            <Form>
                <Form.Field required >
                    <Label content="First Name" />
                    <input type="text" 
                    name="firstName"
                    value={this.state.data.firstName}
                    onChange = {this.onInputChange}
                    placeholder="Enter Your First Name"
                    />
                </Form.Field>
                <Form.Field required >
                    <Label content="Last Name" />
                    <input type="text" 
                    name="lastName"
                    value = {this.state.data.lastName}
                    onChange = {this.onInputChange}
                    placeholder="Enter Your Last Name"
                    />
                </Form.Field>
                <Form.Field required >
                    <Label content="Sex" />
                    <input type="radio" value="male" name="sex" 
                    onClick = {this.handleClick}
                    /> Male ||
                    <input type="radio" value="female" name="sex"
                    onClick = {this.handleClick}
                    /> Female ||
                    <input type="radio" value="other" name="sex"
                    onClick = {this.handleClick}
                    /> Other 
                </Form.Field>
                <Form.Field width={4}  >
                    <Label content="Age" />
                    <input type="number"
                    name = "age"
                    value = {this.state.data.number}
                    onChange = {this.onInputChange}
                    />
                </Form.Field>
                <Button content="Submit" floated="right" color="brown" 
                onClick = {this.handleSubmit}
                />
            </Form>
            </Segment>
            
        )
    }
}

export default AvatarInfo;