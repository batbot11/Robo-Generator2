import React from "react";
import {Segment, Item} from "semantic-ui-react";
import randomstring from "randomstring";

const AvatarCard = ({data}) => {
    return(
        <Segment compact inverted color="grey" >
            <Item>
                <img src= {`https://robohash.org/${randomstring.generate()}?set=any&size=150x150`} alt=""/>
            </Item>
            <Item>
                <h2>{data.firstName} {data.lastName} </h2>
            </Item>
            <Item.Group>

                <Item content={ data.sex } />
                <Item content={ data.age } />
                
            </Item.Group>
            
        </Segment>
    )
}

export default AvatarCard;