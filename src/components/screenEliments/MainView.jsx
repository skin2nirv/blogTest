import React, { Component } from 'react';
import { Text } from '../yjc/TextComponents';
import styled from 'styled-components';
import { ResponsiveWidthLayOut } from '../layout/ResponsiveWidthLayOut';

class MainView extends Component {
	render() {
		return (
			<ResponsiveWidthLayOut
				style={styles.outStyle}
				innerStyle={styles.boxStyle}
			>
				<Text style={styles.test}>mainView</Text>
			</ResponsiveWidthLayOut>
		);
	}
}

const styles = {
	outStyle: `
    `,
	boxStyle: `
        height : 1000px;
    `,
	test: `
        font-size : 10vmin;
    `,
};
export default MainView;
