import React, { Component } from 'react';
import styled from 'styled-components';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const StyledHeader = styled.div`
  	height: 60px;
  	display: flex;
  	align-items: center;
  	background-color: #131921;
	@media (max-width: 768px) {
		justify-content: space-between;
	}
`;

const StyledLogo = styled.img`
	width: 100px;
  	object-fit: contain;
  	margin: 0 20px;
  	margin-top: 18px;
`;

class Header extends Component {

	render() {
		return (
			<div>
				<StyledHeader>
                    <a href="/">
						<StyledLogo 
							src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
						/>
					</a>
                </StyledHeader>
			</div>

		);
	}
}

export default Header;
