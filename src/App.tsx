import * as React from 'react';
import { Text } from './components/yjc/TextComponents';
import styled from 'styled-components';
import Header from './components/screenEliments/Header';
import NavigationBar from './components/screenEliments/NavigationBar';
import Footer from './components/screenEliments/Footer';
import MainView from './components/screenEliments/MainView';

class App extends React.Component {
	render() {
		return (
			<Container>
				<Header />
				<NavigationBar />
				<MainView />

				<Footer />
			</Container>
		);
	}
}

const styles = {
	test: `
		color : red;
		font-size : 200px;
	`,
};

const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`;

export default App;
