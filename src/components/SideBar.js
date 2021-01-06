import React, { Component } from 'react';
import styled from 'styled-components';
import FaceIcon from '@material-ui/icons/Face';
import CloseIcon from '@material-ui/icons/Close';

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

const StyledSideBarHeader = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    color: white;
    background-color: #232f3e;
    span {
        margin-left: 5px;
    }
`;

const StyledSubMenuItem = styled.ul`
    li {
        padding: 10px 20px;
        font-weight: 600;
        cursor: pointer;
    }
`;

const StyledCloseIcon = styled(CloseIcon)`
    position: absolute;
    top: 10px;
    left: 360px;
    color: white;
    cursor: pointer;
`;

class SideBar extends Component {

	render() {
		return (
			<div>
                { this.props.menuStatus === "open" && 
                    <StyledSideBar>
                        <StyledSideBarContent>
                            <StyledSideBarHeader>
                                <FaceIcon />
                                <span>Hello, Sign in</span>
                            </StyledSideBarHeader>
                            <StyledSubMenuItem>
                                <li>Trending</li>
                                <li>Digital Content & Devices</li>
                                <li>Shop By Department</li>
                                <li>Programs & Features</li>
                                <li>Help & Settings</li>
                            </StyledSubMenuItem>
                        </StyledSideBarContent>
                        <StyledCloseIcon
                            onClick={this.props.handleClick}
                        />
                    </StyledSideBar>
                }
			</div>

		);
	}
}

export default SideBar;
