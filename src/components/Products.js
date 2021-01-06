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

class Products extends Component {

	render() {
		return (
			<StyledProducts>
				<StyledProductsContent>
                    <div>
                        <ProductItem />
                    </div>
                </StyledProductsContent>
			</StyledProducts>

		);
	}
}

export default Products;
