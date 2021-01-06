import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSubHeader = styled.div`
  	height: 40px;
  	display: flex;
  	align-items: center;
  	background-color: #232f3e;
  	position: sticky;
  	top: 0;
    padding: 0 20px;
    color: white;
    z-index: 2;
`;

class SubHeader extends Component {

	render() {
		return (
			<StyledSubHeader>
				SubHeader
			</StyledSubHeader>

		);
	}
}

export default SubHeader;
