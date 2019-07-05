import * as React from 'react';
import styled from 'styled-components';

interface Props {
	children: string;
	style?: string;
}

export const Text: React.SFC<Props> = ({
	children,
	style,
}) => (
	<DefaultText styles={style}>
		{children}
	</DefaultText>
);

export const TextEN: React.SFC<Props> = ({
	children,
	style,
}) => (
	<EnglishText styles={style}>
		{children}
	</EnglishText>
);

const DefaultText = styled.div<{
	styles?: string;
}>`
	font-size: 10vmin;
	${props => props.styles}
`;

const EnglishText = styled.div<{
	styles?: string;
}>`
	${props => props.styles}
`;
