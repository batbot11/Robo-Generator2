import React from "react";
import {Radio, Segment} from "semantic-ui-react";

const MainQuestion = ({onRadioClick, radioClick}) => (
    <div>

    <h1 className="main-question" >Do you know Tarun personally?</h1>
   {!radioClick &&  <Segment secondary compact >
    <span  >
		  NO! <Radio toggle  onClick = {onRadioClick} /> YES!
	  </span>
    </Segment> }
    </div>
);

export default MainQuestion;