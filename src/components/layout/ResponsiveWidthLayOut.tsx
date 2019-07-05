import * as React from 'react';
import styled from 'styled-components';

interface Props {
	children: React.ReactNode;
	style?: string;
	innerStyle?: string;
}

export const ResponsiveWidthLayOut: React.SFC<
	Props
> = ({ children, style, innerStyle }) => (
	<Container styles={style}>
		<ViewBox styles={innerStyle}>
			{children}
		</ViewBox>
	</Container>
);

const Container = styled.div<{
	styles?: string;
}>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	${props => props.styles}
`;

const ViewBox = styled.div<{
	styles?: string;
}>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 1090px;
	height: 100px;
	border: 1px black solid;
	@media (max-width: 1090px) {
		width: 800px;
	}
	${props => props.styles}
`;
