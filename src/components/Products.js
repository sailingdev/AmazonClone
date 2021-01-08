import React, { Component } from 'react';
import styled from 'styled-components';
import ProductItem from '../utils/ProductItem.js';
import ProductItemGroup from '../utils/ProductItemGroup.js';
import MultiItemCarousel from '../utils/MultiItemCarousel.js';

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
    constructor() {
        super();
        this.state = {
            multiItems: [
                {image: 'https://m.media-amazon.com/images/I/41u-qzdPyfL._AC_SY200_.jpg', title: 'Gaiam Restore Cold Therapy - Massage Roller'},
                {image: 'https://m.media-amazon.com/images/I/41CsM+GQFzL._AC_SY200_.jpg', title: 'RBX Hot and Cold Active Foot Roller for Plantar Fasciitis and Heel Spurs'},
                {image: 'https://m.media-amazon.com/images/I/41fLEAQNy1L._AC_SY200_.jpg', title:"FUN n 'SAFE Exercise Mat, EVA Interlocking Tiles for Gym, Garage, Workspace, and Home Fitness Area"},
                {image: 'https://m.media-amazon.com/images/I/51IzTvMZamL._AC_SY200_.jpg', title: 'MoonRun Cardio Portable Trainer for Home Training with Virtual Running Apps.  Home gym ...'},
                {image: 'https://m.media-amazon.com/images/I/31qyoR8hK-L._AC_SY200_.jpg', title: 'Gaiam Restore Cold Therapy Massage Roller'},
                {image: 'https://m.media-amazon.com/images/I/41dCWm3FGxL._AC_SY200_.jpg', alt: 'Cathe Friedrich s Low Impact Series: Turbo Barre [DVD]'},
                {image: 'https://m.media-amazon.com/images/I/411S1ljtHbL._AC_SY200_.jpg', alt: 'Plant People - Sinus Support |  Promote a healthy immune response for discomfort and pressure in the nose and head ...'},
                {image: 'https://m.media-amazon.com/images/I/41fpNTkwylL._AC_SY200_.jpg', title: 'alt="Kola Goodies Super Green Latte - Plant-Based Nutrition and Focus Boost with Moringa, Gotukola and Spices (30 ..."'},
                {image: 'https://m.media-amazon.com/images/I/41uscdhTktL._AC_SY200_.jpg', title: '32oz Vacuum Insulated Water Bottle with 2 Caps (Spout + Straw Cap) BPA Free, BPA Free Water Bottle with ...'},
                {image: 'https://m.media-amazon.com/images/I/51gjsaBMRYL._AC_SY200_.jpg', title: 'Smart Thermos Thermos with Fahrenheit Temperature Indicator, Vacuum Insulated Stainless Steel Coffee or Tea Mug ...'},
                {image: 'https://m.media-amazon.com/images/I/41doaASfXbL._AC_SY200_.jpg', title: 'Cathe Friedrich Low Impact Series: Athletic Workout'},
                {image: 'https://m.media-amazon.com/images/I/41mm60Zx9CL._AC_SY200_.jpg', title: 'Flyby - Alcohol Recovery Drink for Better Mornings and Quick Hydration Aid (6 Count) - Made of ...'},
                {image: 'https://m.media-amazon.com/images/I/41yMLUr3LYL._AC_SY200_.jpg', title: 'Green Minded Goods Bamboo Lunch Box - BPA Free, Leak Proof, Microwave and Dishwasher Safe, Easy Care, ...'},
            ],
        };
    };

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
                    <StyledRow>
                        <ProductItemGroup
                            title="New: listen without limits"
                            items={[
                                    { image: 'https://m.media-amazon.com/images/I/51DZeZw7K0L._AC_SY119_.jpg', description: ''},
                                    { image: 'https://m.media-amazon.com/images/I/51EocHLTvAL._AC_SY119_.jpg', description: ''},
                                    { image: 'https://m.media-amazon.com/images/I/61B3aGt2hDL._AC_SY119_.jpg', description: ''},
                                    { image: 'https://m.media-amazon.com/images/I/81o43rQ2rZL._AC_SY238_.jpg', description: ''},
                                ]}
                            footer="More information"                        
                        />
                    </StyledRow>
                    <MultiItemCarousel
                        title="Related to the items you saw"
                        items={this.state.multiItems}
                    />
                </StyledProductsContent>
			</StyledProducts>

		);
	}
}

export default Products;
