import React, { Component } from 'react';
import { Text } from '../yjc/TextComponents';
import styled from 'styled-components';
import { ResponsiveWidthLayOut } from '../layout/ResponsiveWidthLayOut';

class Footer extends Component {
	render() {
		return (
			<ResponsiveWidthLayOut
				style={styles.outStyle}
				innerStyle={styles.boxStyle}
			>
				<Text style={styles.test}>Footer</Text>
			</ResponsiveWidthLayOut>
		);
	}
}

const styles = {
	test: `
        font-size : 10vmin;
    `,
};
export default Footer;
