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

class PrimeDropDown extends Component {

	render() {
		return (
			<StyledDropDownContent>
                <StyledImg>
                    <img src="https://m.media-amazon.com/images/G/01/marketing/prime/JoyDelivered/prime_logo_RGB_PRIME_OAT._CB439327201_.png" alt="" />
                </StyledImg>
			</StyledDropDownContent>

		);
	}
}

export default PrimeDropDown;
