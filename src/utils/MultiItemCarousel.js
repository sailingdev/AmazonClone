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
                    <h3>Title</h3>
                    <a href="/">see more</a>
                </StyledCarouselHeader>
                <StyledSlider {...settings}>
                    <div>
                        <a href="/">
                            <img alt="Gaiam Restore Cold Therapy - Massage Roller" src="https://m.media-amazon.com/images/I/41u-qzdPyfL._AC_SY200_.jpg" />
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <img alt="Gaiam Restore Cold Therapy - Massage Roller" src="https://m.media-amazon.com/images/I/41CsM+GQFzL._AC_SY200_.jpg" />
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <img alt="Gaiam Restore Cold Therapy - Massage Roller" src="https://m.media-amazon.com/images/I/41fLEAQNy1L._AC_SY200_.jpg" />
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <img alt="Gaiam Restore Cold Therapy - Massage Roller" src="https://m.media-amazon.com/images/I/51IzTvMZamL._AC_SY200_.jpg" />
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <img alt="Gaiam Restore Cold Therapy - Massage Roller" src="https://m.media-amazon.com/images/I/31qyoR8hK-L._AC_SY200_.jpg" />
                        </a>
                    </div>
                </StyledSlider>
			</StyledCarousel>
		);
	}
}

export default MultiItemCarousel;
