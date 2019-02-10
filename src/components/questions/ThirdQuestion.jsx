import React from "react";
import {Segment, Form, Button} from "semantic-ui-react";

class ThirdQuestion extends React.Component {

    state = {
        thirdData: "",
        thirdClick: false,
        removeData: false
    }

    handleFormChange = (event) => {
        this.setState({
            thirdData: event.target.value
        })
    }

    handleButtonClick = () => {
        if (this.state.thirdData.toLowerCase() === "pizza") {

            this.setState({
                thirdClick: true,
                removeData: true
            })
        }
    }

    render() {
        return(
            <div>

        {this.props.secondClick && !this.state.removeData &&  <Segment secondary compact >
            <h3>What's My Favourite Food?</h3>
            <Form>
                <Form.Group>
                    <input type="text"
                    name = "lastName"
                    value = {this.state.thirdData}
                    onChange = {this.handleFormChange}
                    placeholder = "Clue's in the Resume!"
                    />
                    <Button primary content = "Hit It!" 
                    onClick = {this.handleButtonClick}
                    />
                </Form.Group>
            </Form>
        </Segment>
        }
            </div>
        )
    }
}

export default ThirdQuestion;