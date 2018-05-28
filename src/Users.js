import React from "react";
import PostList from "./PostList";


export default class Users extends React.Component {
    state = {
        users: [],
        currentUserId: -1
    };

    setUserId = (userId) => event => {
        this.setState({currentUserId: userId});
    };

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

    render() {
        return <div>
            <div className="users">
                {this.state.users.map(user => {
                    console.log(user);
                    return (
                        <button onClick={this.setUserId(user.id)}>{user.name}</button>
                    )
                })}
            </div>
            <PostList userId={this.state.currentUserId}/>
        </div>
    }
}