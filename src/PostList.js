import React from "react";
import Post from './Post';

export default class PostList extends React.Component {
    state = {
        posts: [],
        isLoading: true,
    };

    /**
     * Метод, который вызывается после того как компонент получает новые свойства nextProps.
     * @param {Object} nextProps Новые свойства.
     */
    componentWillReceiveProps(nextProps) {
        this.setState({isLoading: true});
        fetch(`http://jsonplaceholder.typicode.com/posts?userId=${nextProps.userId}`)
            .then(res => res.json())
            .then(posts => setTimeout(() => this.setState({
                posts,
                isLoading: false
            }), 500))
            .catch(err => this.setState({
                err,
                isLoading: false
            }));
    }

    render() {
        if (this.props.userId === -1) {
            return <div>User's not selected</div>
        }
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        if (this.state.err) {
            return <div>Error</div>
        }
        return this.state.posts.map(post => <Post key={post.id} {...post} />);
    }

}
