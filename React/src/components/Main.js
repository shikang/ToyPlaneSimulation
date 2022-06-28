import React, { Component } from 'react';

import ParamsForm from "./ParamsForm";
import Simulation from "./Simulation";
import MainState from "../enums/MainState";

class Main extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            mainState: MainState.ENTER_PARAMS,
            params : {
                mass: 1,
                drag: 0.1,
                force: 2000,
                angle: 45
            }
        };
    }

    componentDidMount() {
    }

    submitParams = (params) => {
        console.log(params);
        this.setState({
            params
        })
        //this.updateMainState(MainState.SIMULATION);
        this.setState({
            mainState: MainState.SIMULATION
        })
    }

    render() {
        let page;
        
        switch (this.state.mainState) {
            case MainState.SIMULATION:
                page = <Simulation />
                break;
            case MainState.ENTER_PARAMS:
            default:
                page = <ParamsForm params={this.state.params} submitParams={this.submitParams}/>
                break;
        }
        
        /*
        if (this.state.mainState === MainState.ENTER_PARAMS) {
            page = <ParamsForm params={this.state.params} submitParams={this.submitParams}/>
        } */
                
        return (
            <div>
                {page}
            </div>
        )
    }
}

export default Main;