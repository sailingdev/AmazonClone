import React, { Component } from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const StyledCarousel = styled.div`
	padding: 10px;
`;

const StyledCarouselHeader = styled.div`
    padding: 15px;
    background: white;
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        margin-left: 10px;
        &:hover {
            text-decoration: underline;
            color: red;
        }
    }
`;

class MultiItemCarousel extends Component {

	render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        };
		return (
			<StyledCarousel>
				<StyledCarouselHeader>
                    <h3>Title</h3>
                    <a href="/">see more</a>
                </StyledCarouselHeader>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                    <div>
                        <h3>9</h3>
                    </div>
                </Slider>
			</StyledCarousel>
		);
	}
}

export default MultiItemCarousel;
