import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDropDownContent = styled.div`
    background: #00a8e1;
`;

const StyledImg = styled.div`
    width: 33%;
    height: auto;
    margin: 0 auto;
    padding: 20px 0px 15px 0px;
    max-width: 100%;

    img {
        max-width: 100%;
    }
`;

const StyledCopy = styled.div`
    color: #FFF4E0;
    font-size: 24px;
    line-height: 26px;
    width: 275px;
    margin: 0 auto;
    text-align: center;
    padding-top: 10px;
    font-family: Amazon Ember, sans-serif;
    font-weight: 700;
`;

const StyledSubhead = styled.div`
    color: #FFF4E0;
    font-size: 14px;
    line-height: 16px;
    width: 275px;
    margin: 0 auto;
    text-align: center;
    padding-top: 10px;
    font-family: Amazon Ember, sans-serif;
`;

const StyledButton = styled.div`
    text-align: center;
    margin-top: 20px;

    & > button {
        cursor: pointer;
        outline: none;
        border: 0px solid;
        border-color: #c89411 #b0820f #99710d;
        -webkit-border-radius: 3px 3px 3px 3px;
        -moz-border-radius: 3px 3px 3px 3px;
        border-radius: 5px 5px 5px 5px;
        background: #ff9900;
        text-align: center;
        line-height: 31px;
        vertical-align: middle;
        color: #002552;
        font-family: "arial", "sans-serif";
        text-decoration: none;
        display: inline;
        font-weight: bold;
        font-size: 14px;
        padding: .75em;
    }
`;

const StyledBottomImg = styled.div`
    width: 250px;
    height: auto;
    margin: 0 auto;
    padding-top: 13px;
    max-width: 100%;

    img {
        max-width: 100%;
    }
`;

class PrimeDropDown extends Component {

	render() {
		return (
			<StyledDropDownContent>
                <StyledImg>
                    <img src="https://m.media-amazon.com/images/G/01/marketing/prime/JoyDelivered/prime_logo_RGB_PRIME_OAT._CB439327201_.png" alt="" />
                </StyledImg>
                <StyledCopy>
                    <p>Music.</p>
                    <p>Movies. Munchies.</p>
                </StyledCopy>
                <StyledSubhead>
                    Shopping and entertainment all in one place.
                </StyledSubhead>
                <StyledButton>
                    <button>
                        Try Prime
                    </button>
                </StyledButton>
                <StyledBottomImg>
                    <img src="https://m.media-amazon.com/images/G/01/marketing/prime/JoyDelivered/Prime-Gateway-Flyout-Non-Member-Ph1-Multi-illustration-1000x1258_v2._CB437406087_.png"  alt="" />
                </StyledBottomImg>
			</StyledDropDownContent>
		);
	}
}

export default PrimeDropDown;
