import React, { Component } from 'react';
import styled from 'styled-components';
import ProductItem from '../utils/ProductItem.js';

const StyledProducts = styled.div`
    padding: 0 10px 0;
`;

const StyledProductsContent = styled.div`
    max-width: 1480px;
    margin: 0 auto;
    overflow: hidden;
    padding: 20px 0;
`;

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
`;

class Products extends Component {

	render() {
		return (
			<StyledProducts>
				<StyledProductsContent>
                    <StyledRow>
                        <ProductItem 
                            title="Fitness for the new yeaer"
                            img="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Events/XCM_CUTTLE_1302372_1541708_US_NYNY_3630094_379x304_1X_en_US._SY304_CB413096725_.jpg"
                            footer="Shop Home Finess"
                        />
                        <ProductItem 
                            title="Book for the new year"
                            img="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Events/XCM_CUTTLE_1302372_1541707_US_NYNY_3630091_379x304_1X_en_US._SY304_CB413096725_.jpg"
                            footer="See more books"
                        />
                        <ProductItem 
                            title="All-new Ech Frames"
                            img="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MWQ0NzdiNzQt/MWQ0NzdiNzQt-NDFlZjdlZDIt-w379._SY304_CB412115001_.jpg"
                            footer="Learn more"
                        />
                        <ProductItem 
                            title="Deal of the Day"
                            img="https://m.media-amazon.com/images/I/41FHFmuc21L._AC_SY240_.jpg"
                            footer="See all deals"
                        />
                    </StyledRow>
                </StyledProductsContent>
			</StyledProducts>

		);
	}
}

export default Products;
