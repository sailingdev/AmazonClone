import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Gallery from 'react-amazon-gallery';
import Responsive from 'react-responsive-decorator';
import StarRatings from 'react-star-ratings';

function ProductDetail(props) {
    const [isMobile, setIsMobile] = useState(false);
    const images = [
        'https://images-na.ssl-images-amazon.com/images/I/81LaJLcduEL._AC_SX679_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/81Y6g4qdK-L._AC_SY879_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61Py5DxbS4L._AC_SY879_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71NGyFnXgKL._AC_SY879_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71NGyFnXgKL._AC_SY879_.jpg'
    ];

    useEffect(() => {
        props.media({ minWidth: 768 }, () => {
            setIsMobile(false);
        });

        props.media({ maxWidth: 768 }, () => {
            setIsMobile(true);
        });
    });

    return (
        <StyledProductDetail>
            <StyledWrap>
                <StyledGallery
                    images={images}
                    width={ isMobile ? 200 : 500 }
                    height={ isMobile ? 300 : 500 }
                />
                <StyledCenter>
                    <h1>SOUNDBOKS 2 - The Loudest Wireless Bluetooth Speaker</h1>
                    <StyledRating>
                        <StarRatings 
                            rating={4.5}
                            starRatedColor="orange"
                            numberOfStars={5}
                            name='rating'
                            starSpacing="1px"
                            starDimension="20px"
                        />
                        <span>734 ratings</span>
                        { !isMobile &&
                            <>
                                <span> | </span>
                                <span>206 answered questions</span>
                            </>
                        }
                    </StyledRating>
                    <StyledPrice>
                        <span>Price: </span>
                        <StyledCurrency>$699.00</StyledCurrency>
                        <StyledShipping>& FREE Shipping Details </StyledShipping>
                        <StyledReturn> & FREE Returns</StyledReturn>
                    </StyledPrice>
                    <StyledFeature>
                        <div>
                            <span>Brand</span>
                            <span>SOUNDBOXS</span>
                        </div>
                        <div>
                            <span>Color</span>
                            <span>Black</span>
                        </div>
                        <div>
                            <span>Type</span>
                            <span>Outdoor</span>
                        </div>
                        <div>
                            <span>Item Weight</span>
                            <span>16. 25 kg</span>
                        </div>
                    </StyledFeature>
                    <StyledDescription>
                        <h3>About this item</h3>
                        <ul>
                            <li>Loud Quality Sound – 122 dB of volume, crisp treble and huge bass</li>
                            <li>Bluetooth Ready – Connect devices via Bluetooth or ⅛” AUX input</li>
                            <li>Lasts 40 Hours - Swappable battery pack that lasts an average of 40 hours</li>
                            <li>Durable Design – Water resistant, splash proof, dirt resistant and built to last</li>
                            <li>Portable and Fully Wireless - Take the 33 lbs loudspeaker anywhere, set it up in seconds without any chords</li>
                        </ul>
                    </StyledDescription>
                </StyledCenter>
                <StyledRight>
                    <StyledCurrency>$699.00</StyledCurrency>
                    <StyledShipping>& FREE Shipping. Details</StyledShipping>
                    <StyledReturn>& FREE Returns</StyledReturn>
                    <StyledShipping>Arrives: Moday, Jan 18 Details</StyledShipping>
                    <span>In Stock.</span>
                    <Qty>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </Qty>
                </StyledRight>
            </StyledWrap>
        </StyledProductDetail>
    );
}

const StyledProductDetail = styled.div`
    background: white;
    & > div {
        max-width: 80%;
        margin: auto;
        padding: 40px 0;
    }
`;
    
    const StyledWrap = styled.div`
    display: flex;
    flex-direction: row;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
    
const StyledGallery = styled(Gallery)`
    position: sticky;
`;

const StyledCenter = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 40px;
    h1 {
        cursor: pointer;
        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

    @media (max-width: 768px) {
        padding: 0;
    }

`;

const StyledRating = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    border-bottom: 1px solid #e7e7e7;
    padding: 10px 0;

    span {
        color: #007185;
        margin: 0 5px;
    }
`;

const StyledPrice = styled.div`
    display: flex;
    flex-direction: row;

    padding: 10px 0;
    span {
        margin: 0 5px;
    }
    span:nth-child(1) {
        color: #007185;
    }
    span:nth-child(2) {
        color: red;
    }
    span:nth-child(3) {
        color: black;
        font-weight: 600;
    }
    span:nth-child(4) {
        color: #007185;
    }
`;

const StyledCurrency = styled.span`
    color: red;
`;

const StyledShipping = styled.span`
    color: black;
    font-weight: 600;
`;

const StyledReturn = styled.span`
    color: #007185;
`;

const StyledFeature = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e7e7e7;
    padding: 10px 0;

    & > div {
        width: 50%;
        display: flex;
        flex-direction: row;
        span {
            width: 50%;
            padding: 5px;
        }
        span:first-child {
            font-weight: 600;
        }
    }
`;

const StyledDescription = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid #e7e7e7;

    ul {
        padding-left: 20px;
    }
`;

const StyledRight = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    position: relative;
    padding: 14px 18px;
    border: 1px solid #e7e7e7;
    font-size: 14px;
    min-width: 240px;

    span {
        padding: 5px 0;
    }

    span:nth-child(5) {
        font-size: 20px;
        color: #007600;
    }
`;

const Qty = styled.select`
    border-color: #D5D9D9;
    box-shadow: 0 2px 5px rgba(15,17,17,.15);
    border-radius: 8px;
    color: #0F1111;
    background: #F0F2F2;
    padding: 3px;
    outerline: none;
`;

export default Responsive(ProductDetail);
