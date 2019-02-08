import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './store';

const Container = styled.div`
	margin: 0 auto;
	width: 96%;
	max-width: 1200px;
`;

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Container>
					<PostForm />
					<br />
					<Posts />
				</Container>
			</Provider>
		);
	}
}

export default App;
