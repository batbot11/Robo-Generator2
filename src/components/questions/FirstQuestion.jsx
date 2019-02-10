import React from "react";
import {Segment, Form, Button} from "semantic-ui-react";
import SecondQuestion from "./SecondQuestion";

class FirstQuestion extends React.Component {

    state = {
        firstData: "",
        firstClick: false,
        removeData: false,
        error: false
    }

    handleFormChange = (event) => {
        this.setState({
            firstData: event.target.value
        })
    }

    handleButtonClick = () => {
        if (this.state.firstData.toLowerCase() === "pathak")
        this.setState({
            firstClick: true,
            removeData: true
        })
        else this.setState({
            error: true
        })
    }

    render () {
        return(
            <div>

      {this.props.radioClick && !this.state.removeData &&  <Segment secondary compact >
                <h3>What's My Last Name?</h3>
                <Form>
                    <Form.Group>
                        <input type="text"
                        name = "lastName"
                        value = {this.state.firstData}
                        onChange = {this.handleFormChange}
                        placeholder = "Enter My Last Name Here!"
                        />
                        <Button primary content = "Hit It!" 
                        onClick = {this.handleButtonClick}
                        />
                    </Form.Group>
                </Form>
                {this.state.error && <h4>Oops! Wrong Answer. Try Again</h4> }
            </Segment>
            }
             <SecondQuestion firstClick = {this.state.firstClick} />
        </div>
        )
    }
}

export default FirstQuestion;