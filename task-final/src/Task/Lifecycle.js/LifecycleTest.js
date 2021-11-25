import React, { Component } from 'react'
import Content from './Content';

class LifecycleTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 0
        }
    };
    setNewNumber = () => {
        this.setState({ data: this.state.data + 1 })
    }

    render() {
        return (
            <div style={{display:"flex",flexDirection:"column",margin:"200px 600px"}}>
                <button style={{width:"100px"}} onClick={this.setNewNumber}>INCREMENT</button>
                <Content data={this.state.data} />
            </div>
        )
    }
}

export default LifecycleTest
