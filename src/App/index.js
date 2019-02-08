import React from 'react';
import styled from 'styled-components';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

const Container = styled.div`
	margin: 0 auto;
	width: 96%;
	max-width: 1200px;
`;

class App extends React.Component {
	render() {
		return (
			<Container>
				<PostForm />
				<br />
				<Posts />
			</Container>
		);
	}
}

export default App;
