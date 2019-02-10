import React from "react";
import {Segment, Form, Button} from "semantic-ui-react";
import ThirdQuestion from "./ThirdQuestion";

class SecondQuestion extends React.Component {

    state = {
        secondData: "",
        secondClick: false,
        removeData: false
    }

    handleFormChange = (event) => {
        this.setState({
            secondData: event.target.value
        })
    }

    handleButtonClick = () => {
        if (this.state.secondData.toLowerCase() === "delhi technical campus") 
            this.setState({
                secondClick: true,
                removeData: true
            })
    }

    render() {
        return(
            <div>

          {this.props.firstClick && !this.state.removeData &&  <Segment secondary compact >
            <h3>What's My College's Name</h3>
            <Form>
                <Form.Group>
                    <input type="text"
                    name = "lastName"
                    value = {this.state.secondData}
                    onChange = {this.handleFormChange}
                    placeholder = "Dont Use Abbreviation"
                    />
                    <Button primary content = "Hit It!" 
                    onClick = {this.handleButtonClick}
                    />
                </Form.Group>
            </Form>
        </Segment>
        }
        <ThirdQuestion secondClick = {this.state.secondClick} />
            </div>
        )
    }
}

export default SecondQuestion;