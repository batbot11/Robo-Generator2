import React from "react";
import {Menu, Image} from "semantic-ui-react";

const Navbar = () => {
    return (
        <Menu>
            <Menu.Item>
                <Image mini src="https://robohash.org/H4N.png?set=set3&size=50x50" />
                </Menu.Item>            
        <Menu.Item header>Robogenerator</Menu.Item>
        <Menu.Item
          name='Dashboard'
        />
      </Menu>
    );
}

export default Navbar;