import React, { Component } from 'react';
import styled from 'styled-components';

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
		return (
			<StyledCarousel>
				<StyledCarouselHeader>
                    <h3>Title</h3>
                    <a href="/">see more</a>
                </StyledCarouselHeader>
			</StyledCarousel>

		);
	}
}

export default MultiItemCarousel;
