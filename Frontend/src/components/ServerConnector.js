// inspired by https://www.youtube.com/watch?v=19CcxzZHwuI&ab_channel=THESHOW
import React /*useState, */, { useEffect } from 'react';

class ServerConnector extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: [] };
    }

    componentDidMount() {
        //callServer(){
        // fetch("/api/sendSMS")
        //     .then(res => res.text())
        //     .then(res => this.setState({response: res}));
        useEffect(() => {
            fetch('/api/sendSMS', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'New title added',
                    body: 'New body added. Hello body.',
                    userId: 2,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => {
                    response.json();
                    console.log('1');
                })
                .then((result) => {
                    console.log('10');
                    this.setState({
                        user: result,
                    });
                });
        });

        // fetch('https://jsonplaceholder.typicode.com/posts', {
        // 		method: 'POST',
        // 		body: JSON.stringify({
        // 			title: 'New title added',
        // 			body: 'New body added. Hello body.',
        // 			userId: 2
        // 		}),
        // 		headers: {
        // 			"Content-type": "application/json; charset=UTF-8"
        // 		}
        // 	}).then(response => {
        // 			return response.json()
        // 		}).then(json => {
        // 			this.setState({
        // 				user:json
        // 			});
        // 		});

        //}
    }

    render() {
        return (
            <div>
                <p>
                    <b>New Resource created in the server as shown below</b>
                </p>
                <p>Id : {this.state.user.id}</p>
                <p>Title : {this.state.user.title}</p>
                <p>Body : {this.state.user.body}</p>
                <p>UserId : {this.state.user.userId}</p>
            </div>
        );
    }
}

export default ServerConnector;
