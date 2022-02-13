// inspired by https://www.youtube.com/watch?v=19CcxzZHwuI&ab_channel=THESHOW
import React from 'react';

class ServerConnector extends React.Component {
    constructor(props) {
        super(props);
        this.state = { response: false };
    }

    callServer() {
        fetch('http://localhost:3001')
            .then((res) => res.text())
            .then((res) => this.setState({ response: res }));
    }

    render() {
        return (
            <div>
                <p>Connected!</p>
            </div>
        );
    }
}

export default ServerConnector;
