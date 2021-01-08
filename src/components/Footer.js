import React, { Component } from 'react';
import styled from 'styled-components';

const StyledItemLine = styled.div`
	padding: 25px;
`;

const StyledFooter = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #232F3E;
	text-align: center;
	margin: auto;
	color: white;

	${StyledItemLine}:first-child {
		border-bottom: 1px solid #3a4553;
	}

	${StyledItemLine}:nth-child(n+3) {
		background: #131A22;
	}
`;


class Footer extends Component {

	render() {
		return (
			<StyledFooter>
				<StyledItemLine>Accessiblity</StyledItemLine>
				<StyledItemLine>Item</StyledItemLine>
				<StyledItemLine>Description</StyledItemLine>
				<StyledItemLine>Copyright</StyledItemLine>
			</StyledFooter>
		);
	}
}

export default Footer;
