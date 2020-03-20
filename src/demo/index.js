import React, { Component } from 'react';
import MatchRender from '../lib/react-match-render';

class example extends Component {
    state = {
        value1: false,
        value2: '',
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ value1: true, value2: 'HELLO_WORLD' })
        }, 2000)   
    }

    render() {
        const { value1, value2 } = this.state;

        return (
            <div>
                <MatchRender
                    requirements={[true, 'HELLO_WORLD']}
                    conditions={[value1, value2]}
                >
                    Hello World!
                </MatchRender>
            </div>
        );
    }
}

export default example;
