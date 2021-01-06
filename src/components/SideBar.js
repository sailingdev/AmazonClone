import React, { Component } from 'react';
import styled from 'styled-components';
import FaceIcon from '@material-ui/icons/Face';

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

const StyledSideBarContent = styled.div`
    width: 350px;
    height: 100%;
    background-color: white;
    flex-direction: column;
    box-shadow: 4px 0 10px 0 rgba(0,0,0,.4);
    will-change: transform;
`;

class SideBar extends Component {

	render() {
		return (
			<div>
				<StyledSideBar>
                    <StyledSideBarContent>
                        menu
                    </StyledSideBarContent>
                </StyledSideBar>
			</div>

		);
	}
}

export default SideBar;
