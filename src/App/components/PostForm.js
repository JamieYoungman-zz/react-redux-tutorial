import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { createPost } from '../actions/postActions';

class PostForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	onSubmit(event) {
		event.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		};

		this.props.createPost(post);
	}

	render() {
		const { title, body } = this.state;
		return (
			<div>
				<h1>Add Post</h1>

				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title</label>
						<br />
						<input
							type="text"
							name="title"
							value={title}
							onChange={this.onChange}
						/>
					</div>
					<div>
						<label>Title</label>
						<br />
						<textarea
							name="body"
							value={body}
							onChange={this.onChange}
						/>
					</div>
					<div>
						<input type="submit" name="submit" />
					</div>
				</form>
			</div>
		);
	}
}

PostForm.propTypes = {
	createPost: func.isRequired
};

export default connect(
	null,
	{ createPost }
)(PostForm);
