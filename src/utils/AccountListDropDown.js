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

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
`;

const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: left;

    &:last-child {
        border-left: 1px solid #eee;
        padding-left: 20px;
    }

    a {
        position: relative;
        display: block;
        clear: both;
        font-family: inherit;
        line-height: 16px;
        padding: 0 0 7px;
        margin: 0;
        text-decoration: none;
        color: #007185;
        font-size: 14px;
    }
`;

const StyledTitle = styled.div`
    font-size: 16px;
    font-weight: 700;
    padding-bottom: 10px;
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
                <StyledRow>
                    <StyledList>
                        <StyledTitle>Your Lists</StyledTitle>
                        <a href="/">Create a List</a>
                        <a href="/">Find a List or Registry</a>
                        <a href="/">AmazonSmile Charity Lists</a>
                    </StyledList>
                    <StyledList>
                        <StyledTitle>Your Account</StyledTitle>
                        <a href="/">Account</a>
                        <a href="/">Orders</a>
                        <a href="/">Recommendations</a>
                        <a href="/">Browsing History</a>
                        <a href="/">Watchlist</a>
                        <a href="/">Video Purchase & Rentals</a>
                        <a href="/">Kindle Unlimited</a>
                        <a href="/">Content & Devices</a>
                        <a href="/">Subscribe & Save Items</a>
                    </StyledList>
                </StyledRow>
			</StyledDropDown>
		);
	}
}

export default AccountListDropDown;
