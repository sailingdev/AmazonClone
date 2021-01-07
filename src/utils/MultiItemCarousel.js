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

const StyledSlider = styled(Slider)`
    background: white;
    padding: 40px 0;
	.slick-prev{
		top: 120px;
		left: 15px;
		z-index: 1;
		&:before {
			font-size: 50px;
			background: transparent;
			color: black;
		}
		@media (max-width: 768px) {
			display: none;
			visibility: hidden;
		}
	}
	
	.slick-next {
		top: 120px;
		right: 40px;
		z-index: 1;
		&:before {
			font-size: 50px;
			background: transparent;
			color: black;
		}
		@media (max-width: 768px) {
			display: none;
			visibility: hidden;
		}
	}
`;

const StyledWrap = styled.div`
    padding: 0 10px;

    img {
        width: auto;
        max-width: 270px;
        margin: auto;
    }
`;

class MultiItemCarousel extends Component {

	render() {
        var settings = {
            dots: false,
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
                    <h3>{this.props.title}</h3>
                    <a href="/">see more</a>
                </StyledCarouselHeader>
                <StyledSlider {...settings}>
                    {this.props.items.map((item, key) => (
                        <StyledWrap key={key}>
                            <a href="/">
                                <img alt={item.alt} src={item.image} />
                            </a>
                        </StyledWrap>
                    ))}
                </StyledSlider>
			</StyledCarousel>
		);
	}
}

export default MultiItemCarousel;
