import React, { Component } from 'react'

export class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds: 0
        }
    }

    myInterval = setInterval(() => {
        this.setState(prevState => ({ seconds: prevState.seconds + 1 }))
    }, 1000);

    componentDidMount() {
        console.log('Mounted');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Updated');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.seconds === 10;
    }

    componentWillUnmount() {
        console.log('Unmounted');
    }

    render() {
        return (
            <div>Timer: {this.state.seconds} sec</div>
        )
    }
}

export default Timer