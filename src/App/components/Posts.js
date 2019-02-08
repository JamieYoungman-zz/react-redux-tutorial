import React from 'react';
import { connect } from 'react-redux';
import { func, array, object } from 'prop-types';
import { fetchPosts } from '../actions/postActions';

class Posts extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.newPost) {
			this.props.posts.unshift(nextProps.newPost);
		}
	}

	render() {
		const postItems = this.props.posts.map(post => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		));
		return (
			<div>
				<h1>Posts</h1>
				{postItems}
			</div>
		);
	}
}

Posts.propTypes = {
	fetchPosts: func.isRequired,
	posts: array.isRequired,
	newPost: object
};

const mapStateToProps = state => ({
	posts: state.posts.items,
	newPost: state.posts.item
});

export default connect(
	mapStateToProps,
	{ fetchPosts }
)(Posts);
