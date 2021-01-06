import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSideBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100000;
    color: black;
    background-color: rgba(0,0,0, .8);
    animation: fadeIn 0.5s;
`;

class SideBar extends Component {

	render() {
		return (
			<div>
				<StyledSideBar></StyledSideBar>
			</div>

		);
	}
}

export default SideBar;
