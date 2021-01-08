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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 275px;
    max-height: 275px;
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

const StyledProductImgWrap = styled.a`
    width: 50%;
    padding: 0 20px;
    box-sizing: border-box;
    text-decoration: none;
    div {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    img {
        max-height: 120px;
    }
`;

class ProductItemGroup extends Component {

	render() {
		return (
            <StyledProductItem>
                <StyledProductItemContent>
                    <StyledProductItemHeader>
                        <StyledProductTitle>{this.props.title}</StyledProductTitle>
                    </StyledProductItemHeader>
                    <StyledProductItemBody>
                        {this.props.items.map((item, key) => (
                            <StyledProductImgWrap key={key} href="/">
                                <div>
                                    <img src={item.image} alt={item.description} />
                                    <span>{item.description}</span>
                                </div>
                            </StyledProductImgWrap>
                        ))}
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

export default ProductItemGroup;