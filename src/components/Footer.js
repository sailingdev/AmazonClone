import React, { Component } from 'react';
import styled from 'styled-components';
import ReactFlagsSelect from 'react-flags-select';

const StyledItemLine = styled.div`
	padding: 25px;	
	width: 100%;
	box-sizing: border-box;
	
	& > div {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		max-width: 1100px;
		margin: auto;

		@media (max-width: 768px) {
			flex-direction: column;
		}
		
		div {
			text-align: left;
			
			@media (max-width: 768px) {
				margin-bottom: 15px;
			}
			
			ul {
				list-style: none;
				li {
					margin-top: 5px;
					a {
						color: white;
						text-decoration: none;
						font-size: 14px;
					}
				}
			}
		}
	}
`;

const StyledFooter = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #232F3E;
	text-align: center;
	margin: auto;
	color: white;

	${StyledItemLine}:first-child {
		border-bottom: 1px solid #3a4553;
	}

	${StyledItemLine}:nth-child(n+3) {
		background: #131A22;
	}
`;

const StyledLogo = styled.img`
	width: 70px;
	object-fit: contain;
	vertical-align: bottom;
	margin-right: 70px;  
`;

const StyleDropDown = styled.div`
    top: 32px;
    left: -8px;
    position: absolute;
    color: black;
    background: white;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.13);
    list-style-type: none;
    text-align: center;
    padding: 10px;
    border-radius: 3px;
	z-index:3;
	display: none;
    width: 200px;
	box-sizing: border-box;
`;

const StyledChoose = styled.div`
	display: flex;
	align-items: center;
`;

const StyledInput = styled.input`
	margin: .4rem;
`;

const StyledLabel = styled.label`
	font-size: 1rem 'Fira Sans', sans-serif;
	cursor: pointer;
`;

const StyledDivider = styled.div`
	margin-top: 6px;
	margin-left: 24px;
	position: relative;
    display: block;
    line-height: 1px;
    height: 1px;
    overflow: hidden;
    background: #EEE;
    margin: 0 0 9px;
`;

const FlyoutArrow = styled.div`
	border-style: solid;
	border-width: 9px;
	border-color: transparent;
	border-top-width: 0;
	border-bottom: 9px solid #fff;
	width: 0;
	height: 0;
	font-size: 0;
	line-height: 0;
	position: absolute;
	top: -9px;
`;

const StyledDeclarative = styled.a`
	display: inline-block!important;
	border: 1px solid #848688;
	border-radius: 3px;
	padding: 6px 18px 6px 8px;
	font-size: 13px;
	margin-right: 4px;
	text-decoration: none;
	position: relative;
	cursor: pointer;

	span {
		color: #CCC;
		padding: 0 .6em;
	}

	&:hover {
		${StyleDropDown} {
			display: block;
		}
	}
`;

const StyledModal = styled.div`
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

const StyledModalContent = styled.div`
width: 600px;
    max-width: none;
    visibility: visible;
    position: absolute;
    margin: 0px;
    top: 166px;
    left: 660px;
    opacity: 1;
    transform: translateY(8px);
    display: block;
`;

const StyledUpDownArrow = styled.span`
	background: url(https://m.media-amazon.com/images/S/sash/jYdmIJv-COIU_a2.png);
	width: 12px;
	height: 12px;
	background-position: -77px -80px;
	position: relative;
    left: 5px;
    top: 2px;
`;

const StyledGlobeImg = styled.div`
	display: inline-block;
	background: url(https://m.media-amazon.com/images/S/sash/jYdmIJv-COIU_a2.png);
	position: relative;
	width: 15px;
    height: 15px;
    background-position: -76px -51px;
    top: 2px;
    left: 0;
`;

const StyledFlag = styled.div`
	width: 18px;
	position: relative;
	top: 2px;
	margin-right: .8em;
	display: inline-block;
	height: 12px;
	margin: 0 .6em;
	background-image: url(https://m.media-amazon.com/images/S/sash/jYdmIJv-COIU_a2.png);
	background-position: -54px -108px;
`;

const StyledModalWrap = styled.div`
	position: relative;
    border-radius: 8px;
    border: 1px solid;
    border-color: #D5D9D9;
    box-shadow: 0 0 14px 0 rgba(15,17,17,.5);
	height: 100%;
	background-color: #fff;
	overflow: hidden;
	width: 100%;
	height: 333px;
`;

const StyledModalHeader = styled.header`
	border-bottom: 1px solid #D5D9D9;
    background-color: #F0F2F2;
    border-radius: 8px 8px 0 0;
	padding: 0 24px;
	background: linear-gradient(to bottom,#f7f7f7,#eaeaea);
	box-shadow: 0 1px 0 rgba(255,255,255,.5) inset, 0 -1px 0 rgba(255,255,255,.4) inset;
	position: relative;
	text-align: left;
	margin: 0;
    z-index: 10;
`;

const StyledModalTitle = styled.h4`
	padding: 16px 0;
	font-size: 16px;
`;

const StyledModalInner = styled.div`
	padding: 16px 24px;
	text-align: left;
	display: flex;
	flext-direction: row;
	
	& > div {
		width: 50%;
		display: flex;
		flex-direction: column;
		& > div {
			margin-top: 10px;
			button {
				font-size: 14px;
				border-color: #D5D9D9;
				border-radius: 8px;
				color: #0F1111;
				box-shadow: 0 2px 5px rgba(15,17,17,.15);
				background: #F0F2F2;
				height: 29px;
				width: 90%;
			}
		}

		p {
			font-size: 14px;
			font-weight: 700;
		}
		span {
			font-size: 13px;
			line-height: 25px;
		}

		&:last-child: {
			padding-left: 10px;
		}
	}
`;

const StyledModalFooter = styled.div`
	position: absolute;
	bottom: 20px;
	right: 30px;
	display: flex;
    align-items: center;
	flex-direction: row;
	button {
		line-height: 29px;
		background: #e7e9ec;
		border-radius: 3px;
		border-color: #ADB1B8 #A2A6AC #8D9096;
		border-style: solid;
		border-width: 1px;
		cursor: pointer;
		padding: 0;
		width: 100px;
		height: 100%;
		margin-right: 10px;

		&:last-child {
			background: linear-gradient(to bottom,#f7dfa5,#f0c14b);
		}
	}
`;

const StyledItemDescription = styled(StyledItemLine)`
	li {
		margin-bottom: 35px;
		width: 96px;
		line-height: 12px;
		a {
			&:hover {
				text-decoration: underline;
			}
		}
		small {
			color: #999;
		}
	}
`;

class Footer extends Component {
	constructor() {
		super();
		this.state = {
			language: 'english',
			open: false
		};

		this.changeLanguage = this.changeLanguage.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}
	
	changeLanguage(e) {
		this.setState({
			language: e.currentTarget.value,
		})
	}

	handleOpen() {
		this.setState({
			open: true
		});
	}

	handleClose(event) {
		event.preventDefault();
		if(event.target === event.currentTarget) {
			this.setState({
				open: false
			});
		}
	}

	render() {
		return (
			<StyledFooter>
				<StyledItemLine>
					<div>
						<div>
							<h3>Get to Know Us</h3>
							<ul>
								<li><a href="/">Careers</a></li>
								<li><a href="/">Blog</a></li>
								<li><a href="/">About Amazon</a></li>
								<li><a href="/">Press Center</a></li>
								<li><a href="/">Investor Relations</a></li>
								<li><a href="/">Amazon Devices</a></li>
								<li><a href="/">Amazon Tour</a></li>
							</ul>
						</div>
						<div>
							<h3>Make Money with Us</h3>
							<ul>
								<li><a href="/">Sell products on Amazon</a></li>
								<li><a href="/">Sell apps on Amazon</a></li>
								<li><a href="/">Become an Affiliate</a></li>
								<li><a href="/">Advertise Your Products</a></li>
								<li><a href="/">Self-Publish with Us</a></li>
								<li><a href="/">Host an Amazon Hub</a></li>
								<li><a href="/">See More Make Money with Us</a></li>
							</ul>
						</div>
						<div>
							<h3>Amazon Payment Products</h3>
							<ul>
								<li><a href="/">Amazon Rewards Visa Signature Cards</a></li>
								<li><a href="/">Amazon.com Store Card</a></li>
								<li><a href="/">Amazon Business Card</a></li>
								<li><a href="/">Shop with Points</a></li>
								<li><a href="/">Credit Card Marketplace</a></li>
								<li><a href="/">Reload Your Balence</a></li>
								<li><a href="/">Amazon Currency Converter</a></li>
							</ul>
						</div>
						<div>
							<h3>Let Us Help You</h3>
							<ul>
								<li><a href="/">Amazon and Covid-19</a></li>
								<li><a href="/">Your Account</a></li>
								<li><a href="/">Your Orders</a></li>
								<li><a href="/">Shipping Rates & Polices</a></li>
								<li><a href="/">Amazon Prime</a></li>
								<li><a href="/">Returns & Replacements</a></li>
								<li><a href="/">Manage Your Content and Devices</a></li>
							</ul>
						</div>
					</div>
				</StyledItemLine>
				<StyledItemLine>
					<a href="/">
						<StyledLogo src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
					</a>
					<StyledDeclarative>
						<StyledGlobeImg />
						<span>{this.state.language}</span>
						<StyledUpDownArrow />
						<StyleDropDown>
							<FlyoutArrow />
							<StyledChoose>
								<StyledInput 
									id="english"
									type="radio" 
									value="english"
									checked={this.state.language === 'english'}
									onChange={this.changeLanguage}
								/>
								<StyledLabel htmlFor="english">English - EN</StyledLabel>
							</StyledChoose>
							<StyledDivider />
							<StyledChoose>
								<StyledInput 
									id="spanish"
									type="radio"
									value="spanish"
									checked={this.state.language === 'spanish'}
									onChange={this.changeLanguage}
								/>
								<StyledLabel htmlFor="spanish">Spanish - ES</StyledLabel>
							</StyledChoose>
						</StyleDropDown>
					</StyledDeclarative>
					<StyledDeclarative onClick={this.handleOpen}>
						<StyledFlag />
						<span>United States</span>
					</StyledDeclarative>
				</StyledItemLine>
				<StyledItemDescription>
					<div>
						<div>
							<ul>
								<li>
									<a href="/">
										<p>Amazon Music</p>
										<small>Stream millions of songs</small>
									</a>
								</li>
								<li>
									<a href="/">
										<p>Sell on Amazon</p>
										<small>Start a Selling Account</small>
									</a>
								</li>
								<li>
									<a href="/">
										<p>Amazon Web Services</p>
										<small>Scalable Cloud Computing Service</small>
									</a>
								</li>
							</ul>
						</div>
						<div>
							<ul>
								<li>
									<a href="/">
										<p>Amazon Advertising</p>
										<small>Find, attract, and engage customers</small>
									</a>
								</li>
								<li>
									<a href="/">
										<p>Amazon Business</p>
										<small>Everything For Your Business</small>
									</a>
								</li>
								<li>
									<a href="/">
										<p>Audible</p>
										<small>Listen to Books & Original</small>
									</a>
								</li>
							</ul>
						</div>
						<div>
							<ul>
								<li>
									<a href="/">
										<p>Amazon Drive</p>
										<small>Cloud storage from Amazon</small>
									</a>
								</li>
								<li>
									<a href="/">
										<p>Amazon Fresh</p>
										<small>Groceries & More Right To Your Door</small>
									</a>
								</li>
								<li>
									<a href="/">
										<p>Book Depository</p>
										<small>Books With Free Delivery WorldWide</small>
									</a>
								</li>
							</ul>
						</div>
						<div>
							<ul>
								<li>
									<a href="/">
										<p>6pm</p>
										<small>Score deals on fashion brands</small>
									</a>
								</li>
								<li>
									<a href="/">
										<p>AmazonGlobal</p>
										<small>Ship Orders Internationally</small>
									</a>
								</li>
								<li>
									<a href="/">
										<p>Box Office Mojo</p>
										<small>Find Movie Box Office Data</small>
									</a>
								</li>
							</ul>
						</div>
						<div>
							<ul>
								<li>
									<a href="/">
										<p>AbeBooks</p>
										<small>Books, art & collectibles</small>
									</a>
								</li>
								<li>
									<a href="/">
										<p>Home Services</p>
										<small>Experienced Pros Happiness</small>
									</a>
								</li>
								<li>
									<a href="/">
										<p>ComiXology</p>
										<small>Kindle Direct Publishing</small>
									</a>
								</li>
							</ul>
						</div>
						<div>
							<ul>
								<li>
									<a href="/">
										<p>ACX</p>
										<small>Audiobook Publishing Made Easy</small>
									</a>
								</li>
								<li>
									<a href="/">
										<p>DPReview</p>
										<small>Digital Photography</small>
									</a>
								</li>
								<li>
									<a href="/">
										<p>Alexa</p>
										<small>Actionable Analytics for the web</small>
									</a>
								</li>
							</ul>
						</div>
						<div>
							<ul>
								<li>
									<a href="/">
										<p>Amazon Rapids</p>
										<small>Fun stories for kids on the go</small>
									</a>
								</li>
								<li>
									<a href="/">
										<p>East Dane</p>
										<small>Designer Men's Fashion</small>
									</a>
								</li>
								<li>
									<a href="/">
										<p>Prime Video Direct</p>
										<small>Video Distribution Made Easy</small>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</StyledItemDescription>
				<StyledItemLine>4</StyledItemLine>
				{ this.state.open === true && 
					<StyledModal onClick={this.handleClose}>
						<StyledModalContent>
							<StyledModalWrap>
								<StyledModalHeader>
									<StyledModalTitle>Website (Country/Region)</StyledModalTitle>
								</StyledModalHeader>
								<StyledModalInner>
									<div>
										<p>Select your preferred country/region website:</p>
										<ReactFlagsSelect 
											selected={this.state.selectedCountry} 
											defaultCountry="US"
											onSelect={code => this.setState({selectedCountry: code})}
											selectedSize={14}
										/>
										<div>
											<span><b>NOTE: </b></span> 
											<span>A new country/region website selection will open in a new tab.</span>
										</div>
									</div>
									<div>
										<p>Changing country/region website</p>
										<span>Changing the country/region you shop from may affect factors including price, shipping options and product availability.</span>
									</div>
								</StyledModalInner>
								<StyledModalFooter>
									<button onClick={this.handleClose}>Cancel</button>
									<button>Go to website</button>
								</StyledModalFooter>
							</StyledModalWrap>
						</StyledModalContent>
					</StyledModal>
				}
			</StyledFooter>
		);
	}
}

export default Footer;
