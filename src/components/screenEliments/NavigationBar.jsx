import React, { Component } from 'react';
import { Text } from '../yjc/TextComponents';
import styled from 'styled-components';
import { ResponsiveWidthLayOut } from '../layout/ResponsiveWidthLayOut';

class NavigationBar extends Component {
	render() {
		return (
			<ResponsiveWidthLayOut>
				<Text style={styles.test}>Navi</Text>
			</ResponsiveWidthLayOut>
		);
	}
}

const styles = {
	test: `
        font-size : 10vmin;
    `,
};
export default NavigationBar;
