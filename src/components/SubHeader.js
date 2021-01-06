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

const StyleSubLabel = styled.div`
    height: 40px;
    display: flex;
    margin: auto;
    flex-flow: row wrap;
    overflow: hidden;

    & > div {
        padding: 9px 12px;
        & > a {
            color: white;
            text-decoration: none;
            padding: 4px 8px 4px 6px;
            &:hover {
                border: 1px solid;
                border-radius: 2px;
                outline: 0;
                padding: 3px 7px 3px 5px;
            }
        }
    }
`;

class SubHeader extends Component {

	render() {
		return (
			<StyledSubHeader>
                <StyleSubLabel>
                    <div>
                        <a href="/">Customer Service</a>
                    </div>
                    <div>
                        <a href="/">New Releases</a>
                    </div>
                    <div>
                        <a href="/">Find a Gift</a>
                    </div>
                    <div>
                        <a href="/">Whole Foods</a>
                    </div>
                    <div>
                        <a href="/">Today's Deals</a>
                    </div>
                    <div>
                        <a href="/">Gift Cards</a>
                    </div>
                    <div>
                        <a href="/">Best Sellers</a>
                    </div>
                    <div>
                        <a href="/">Books</a>
                    </div>
                    <div>
                        <a href="/">AmazonBasics</a>
                    </div>
                    <div>
                        <a href="/">Kindle Books</a>
                    </div>
                    <div>
                        <a href="/">Toys & Games</a>
                    </div>
                    <div>
                        <a href="/">Fashion</a>
                    </div>
                    <div>
                        <a href="/">Sell</a>
                    </div>
                    <div>
                        <a href="/">Coupons</a>
                    </div>
                    <div>
                        <a href="/">Computers</a>
                    </div>
                    <div>
                        <a href="/">Video Games</a>
                    </div>
                    <div>
                        <a href="/">Amazon Home</a>
                    </div>
                </StyleSubLabel>
			</StyledSubHeader>

		);
	}
}

export default SubHeader;
