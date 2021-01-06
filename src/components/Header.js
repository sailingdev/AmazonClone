import React, { Component } from 'react';
import styled from 'styled-components';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccountListDropDown from '../utils/AccountListDropDown.js';
import SubHeader from './SubHeader.js';

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

const StyledLocation = styled.div`
	display: flex;
	align-items: flex-end;
	color: white;
	cursor: pointer;
	padding: 4px 8px 4px 6px;

	&:hover {
		cursor: pointer;
		border: 1px solid;
		border-radius: 2px;
		outline: 0;
		padding: 3px 7px 3px 5px;

		div {
			border: none;
			padding: none;
		}
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

const StyledOptionLineOne = styled.span`
	font-size: 10px;
`;

const StyledOptionLineTwo = styled.span`
	text-align: center;
	font-size: 13px;
	font-weight: 800;
	display: flex;
	align-items: center;
	&:hover {
		cursor: pointer;
	}
`;

const StyledHeaderSearch = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	border-radius: 24px;

	@media (max-width: 768px) {
		display: none;
	}
`;

const StyledSearchOption = styled.select`
	height: 34px;
	width: 150px;
`;

const StyledSearchInput = styled.input`
	height: 12px;
	padding: 10px;
	border: none;
	width: 100%;
`;

const StyledSearchIcon = styled(SearchIcon)`
	padding: 5px;
	height: 22px;
	background-color: #cd9042;
`;

const StyledHeaderNav = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const StyleDropDown = styled.div`
	top: 40px;
    position: absolute;
    color: black;
    right: -135px;
    background: white;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.13);
    list-style-type: none;
    text-align: center;
	padding: 20px;
	z-index:3;
	display: none;
`;

const StyledOption = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	margin-right: 10px;
	color: white;
	position: relative;
	padding: 4px 8px 4px 6px;

	&:hover {
		cursor: pointer;
		border: 1px solid;
		border-radius: 2px;
		outline: 0;
        padding: 3px 7px 3px 5px;
        
        ${StyleDropDown} {
			display: block;
			animation: fadeIn 0.5s;
		}

    }
    

	@media (max-width: 768px) {
		display: none;
	}
`;

const StyledOptionBasket = styled.div`
	display: flex;
	align-items: center;
    color: white;
    cursor: pointer;
    padding: 4px 8px 4px 6px;

	&:hover {
		cursor: pointer;
		border: 1px solid;
		border-radius: 2px;
		outline: 0;
		padding: 3px 7px 3px 5px;
	}
`;

const StyledBasketCount = styled(StyledOptionLineTwo)`
	margin-left: 10px;
	margin-right: 10px;
`

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
                    <StyledLocation>
						<LocationOnIcon fontSize="small" />
						<StyledOption>
							<StyledOptionLineOne>Hello</StyledOptionLineOne>
							<StyledOptionLineTwo>
								Select your address
							</StyledOptionLineTwo>
						</StyledOption>
					</StyledLocation>
                    <StyledHeaderSearch>
						<StyledSearchOption>
							<option value="StyledOption">All Departments</option>
							<option value="search-alias=todays-deals">Deals</option>
							<option value="search-alias=audible">Audible Books & Originals</option>
							<option value="search-alias=alexa-skills">Alexa Skills</option>
						</StyledSearchOption>
						<StyledSearchInput type="text" />
						<StyledSearchIcon />
					</StyledHeaderSearch>
                    <StyledHeaderNav>
						<StyledOption>
							<StyledOptionLineOne>Hello, sign in</StyledOptionLineOne>
							<StyledOptionLineTwo>
								Account & Lists
								<ArrowDropDownIcon fontSize="small" />
							</StyledOptionLineTwo>
								<StyleDropDown>
									<AccountListDropDown />
								</StyleDropDown>
						</StyledOption>
                        <StyledOption>
							<StyledOptionLineOne>Returns</StyledOptionLineOne>
							<StyledOptionLineTwo>& Orders</StyledOptionLineTwo>
						</StyledOption>
                        <StyledOptionBasket>
							<ShoppingBasketIcon />
							<StyledBasketCount>0</StyledBasketCount>
						</StyledOptionBasket>
					</StyledHeaderNav>
                </StyledHeader>
                <SubHeader />
			</div>

		);
	}
}

export default Header;
