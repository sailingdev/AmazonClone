import React, { Component } from 'react';
import styled from 'styled-components';

const StyledProductItem = styled.div`
    max-width: 400px;
    height: 420px;
    min-height: 420px;
    -webkit-flex: 1 0 290px;
    flex: 1 0 290px;
    padding-left: 10px;
    padding-right: 10px;
    min-width: 290px;
    z-index: 1;
`;

const StyledProductItemContent = styled.div`
    background: #fff;
    height: 100%;
    position: relative;
    margin-bottom: 0;
    margin-top: 0;
    overflow: hidden;
    z-index: -1;
`;

const StyledProductItemHeader = styled.div`
    padding: 0 20px;
    margin-bottom: 10px;
    padding-top: 20px;
`;

const StyledProductItemBody = styled.div`
    flex-grow: 1;
    padding: 0 20px;
    height: 275px;
`;

const StyledProductItemFooter = styled.div`
    padding: 0 20px;
    margin-top: 20px;
    bottom: 0;
    width: 100%;

    a {
        text-decoration: none;
    }
`;

const StyledProductTitle = styled.h2`
    font-size: 21px;
    line-height: 27.3px;
    max-height: 54.6px;
`;

const StyledProductImgWrap = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const StyledProductImg = styled.img`
    margin: auto;
    max-height: 100%;
    height: 100%;
    max-width: none;
    width: 100%;
`;
class ProductItem extends Component {

	render() {
		return (
            <StyledProductItem>
                <StyledProductItemContent>
                    <StyledProductItemHeader>
                        <StyledProductTitle>{this.props.title}</StyledProductTitle>
                    </StyledProductItemHeader>
                    <StyledProductItemBody>
                        <a href="/">
                            <StyledProductImgWrap>
                                <StyledProductImg  src={this.props.img}/>
                            </StyledProductImgWrap>
                        </a>
                    </StyledProductItemBody>
                    <StyledProductItemFooter>
                        <a href="/">
                            {this.props.footer}
                        </a>
                    </StyledProductItemFooter>
                </StyledProductItemContent>
            </StyledProductItem>
		);
	}
}

export default ProductItem;
