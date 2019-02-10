import React from "react";
import Navbar from "../navbar/Navbar";
import MainQuestion from "../questions/MainQuestion";
import FirstQuestion from "../questions/FirstQuestion";


class Dashboard extends React.Component {

    state = {
        radioClick : false,
    }

    handleRadioClick = () => {
        this.setState({
            radioClick: true
        })
    }

    

    render() {
        return(
        <div>
            <Navbar/>
            <MainQuestion radioClick = {this.state.radioClick} 
            onRadioClick = {this.handleRadioClick}
             />
             <FirstQuestion radioClick = {this.state.radioClick}
             />
        </div>
        );
    }
}


export default Dashboard;