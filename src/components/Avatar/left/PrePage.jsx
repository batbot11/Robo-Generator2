import React from "react";
import {Grid, Segment} from "semantic-ui-react";

const PrePage = () => {
    return(
        <div>

        
        <Grid.Row>
            <img src="https://robohash.org/Y1D.png?set=set1&size=150x150" alt=""/>
            <img src="https://robohash.org/6FJ.png?set=set3&size=150x150" alt=""/>
            <img src="https://robohash.org/G6P.png?set=set4&size=150x150" alt=""/>
        </Grid.Row>
        <Grid.Row>
            <Segment compact  >
                <h1 className = "roboto"
                >Enter Your Info In The Form To Get Your Avatar Here!</h1>
            </Segment>
        </Grid.Row>
        <Grid.Row>

        </Grid.Row>
        <Grid.Row>
            <img src="https://robohash.org/GTF.png?set=set2&size=150x150" alt=""/>
            <img src="https://robohash.org/U5O.png?set=set4&size=150x150" alt=""/>
            <img src="https://robohash.org/1FC.png?set=set3&size=150x150" alt=""/>
        </Grid.Row>
        </div>
    )
}

export default PrePage;