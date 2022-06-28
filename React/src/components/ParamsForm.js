import React, { Component } from 'react';
import './ParamsForm.css'

class ParamsForm extends Component {
    constructor(props) {
        console.log("ParamsForm.constructor")
        super(props);
    
        this.state = {
            mass: this.props.params.mass,
            drag: this.props.params.drag,
            force: this.props.params.force,
            angle: this.props.params.angle
        };
    }

    componentDidMount() {
        console.log("ParamsForm.componentDidMount")
    }

    handleMassChange = (event) => {
        console.log("mass: " + event.target.value)
        this.setState({
            mass: parseInt(event.target.value)
        });
    }

    handleDragChange = (event) => {
        console.log("drag: " + event.target.value)
        this.setState({
            drag: parseFloat(event.target.value)
        });
    }

    handleForceChange = (event) => {
        console.log("force: " + event.target.value)
        this.setState({
            force: parseInt(event.target.value)
        });
    }

    handleAngleChange = (event) => {
        console.log("angle: " + event.target.value)
        this.setState({
            angle: parseInt(event.target.value)
        });
    }
    
    handleSubmit = (event) => {
        this.props.submitParams(this.state)
        event.preventDefault();
    }

    render() {

        return (
            <div className="pfContent">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Mass:
                        <input type="number" min="1" max="5" value={this.state.mass} onChange={this.handleMassChange} />
                    </label>
                    <br/>
                    <label>
                        Drag:
                        <input type="number" min="0.01" max="2" step=".01" value={this.state.drag} onChange={this.handleDragChange} />
                    </label>
                    <br/>
                    <label>
                        Force:
                        <input type="number" min="100" max="3000" value={this.state.force} onChange={this.handleForceChange} />
                    </label>
                    <br/>
                    <label>
                        Angle:
                        <input type="number" min="5" max="80" value={this.state.angle} onChange={this.handleAngleChange} />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ParamsForm;