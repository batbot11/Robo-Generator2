import React from "react";
import {Menu, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <Menu>
            <Menu.Item>
                <Image mini src="https://robohash.org/H4N.png?set=set3&size=50x50" />
                </Menu.Item>            
        <Menu.Item header as={Link} to="/"
        >Robogenerator</Menu.Item>
        <Menu.Item as={Link} to="/dashboard"
          name='Dashboard'
        />
      </Menu>
    );
}

export default Navbar;