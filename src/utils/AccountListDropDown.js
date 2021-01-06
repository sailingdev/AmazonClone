import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDropDown = styled.div`
    display: flex;
    flex-direction: column;
    width: 460px;
`;

const StyledSignIn = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 11px;
    padding: 0 120px 10px 120px;
    border-bottom: 1px solid #eee;

    span {
        margin-top: 10px;
        a {
            margin-left: 10px;
        }
    }

`;

const StyledButton = styled.button`
    height: 33px;
    border-color: #c89411 #b0820f #99710d;
    cursor: pointer;
    border: 1px solid;
    font-family: inherit;
    background: -webkit-linear-gradient(top,#f8e3ad,#EEBA37);
`;

class AccountListDropDown extends Component {

	render() {
		return (
			<StyledDropDown>
				<StyledSignIn>
                    <StyledButton>Sign In</StyledButton>
                    <span>
                        New customer?
                        <a href="/">Start here.</a>
                    </span>
                </StyledSignIn>
			</StyledDropDown>
		);
	}
}

export default AccountListDropDown;
