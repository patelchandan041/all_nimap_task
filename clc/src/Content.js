import React, { Component } from 'react'

class Content extends Component {
    constructor(props) {
		super(props)
		}

        componentWillMount() {
            console.log('Component WILL MOUNT!')
         }
         componentDidMount() {
            console.log('Component DID MOUNT!')
         }
         componentWillReceiveProps(newProps) {    
            console.log('Component WILL RECIEVE PROPS!')
         }
         shouldComponentUpdate(newProps, newState) {
            return true;
         }
         componentWillUpdate(nextProps, nextState) {
            console.log('Component WILL UPDATE!');
         }
         componentDidUpdate(prevProps, prevState) {
            console.log('Component DID UPDATE!')
         }
         componentWillUnmount() {
            console.log('Component WILL UNMOUNT!')
         }
    render() {
        return (
            <div>
                <h2>{this.props.data}</h2>
            </div>
        )
    }
}

export default Content;
