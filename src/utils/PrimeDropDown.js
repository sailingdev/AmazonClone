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
			</StyledDropDownContent>

		);
	}
}

export default PrimeDropDown;
