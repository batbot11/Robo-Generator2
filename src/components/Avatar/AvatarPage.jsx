import React from "react";
import {Grid, Container} from "semantic-ui-react";
import AvatarInfo from "./right/AvatarInfo";
import PrePage from "./left/PrePage";
import AvatarList from "./left/AvatarList";

class AvatarPage extends React.Component {

    state = {
        infoAdded: false,
        cardData: {
            firstName: "",
            lastName: "",
            sex: "",
            age: ""
        }
    }

    componentWillReceiveProps() {
        
    }

    addNewCard = (data) => {
        this.setState({
            infoAdded: true,
            cardData: {...data}
        })
    }

    render() {
        return(
            <Container>
            <Grid>
                <Grid.Column width = {10} >
                  {!this.state.infoAdded &&  <PrePage/>}  
                    {this.state.infoAdded &&  <AvatarList cardData = {this.state.cardData} />} 
                </Grid.Column>
                <Grid.Column width = {6} >
                    <AvatarInfo addNewCard = {this.addNewCard} />
                </Grid.Column>
            </Grid>
            </Container>
        )
    }
}

export default AvatarPage