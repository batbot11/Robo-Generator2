import React from "react";
import {Segment, Form, Button} from "semantic-ui-react";
import {withRouter} from "react-router-dom";

class ThirdQuestion extends React.Component {

    state = {
        thirdData: "",
        thirdClick: false,
        error: false
    }

    handleFormChange = (event) => {
        this.setState({
            thirdData: event.target.value
        })
    }

    handleButtonClick = () => {
        if (this.state.thirdData.toLowerCase() === "pizza") {
            this.props.history.push("/avatar")
        }
            else this.setState({
                error: true
            })
    }

    render() {
        return(
            <div>

        {this.props.secondClick  &&  <Segment secondary compact >
            <h3>What's My Favourite Food?</h3>
            <Form>
                <Form.Group>
                    <input type="text"
                    name = "lastName"
                    value = {this.state.thirdData}
                    onChange = {this.handleFormChange}
                    placeholder = "Clue's in the Resume!"
                    />
                     
                    <Button primary content = "Create Your Robo Avatar!" 
                    onClick = {this.handleButtonClick}
                    />
                </Form.Group>
            </Form>
            {this.state.error && <h4>Correct answer is inside the Resume!</h4> }
        </Segment>
        }
            </div>
        )
    }
}

export default withRouter(ThirdQuestion);