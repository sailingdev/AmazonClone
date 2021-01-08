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

            recommededItems: [
                {image: 'https://m.media-amazon.com/images/I/51s1Mnr56CL._AC_SY200_.jpg', title: 'Man on the Street (Box 10 CD)'},
                {image: 'https://m.media-amazon.com/images/I/41sx7O9KcoL._AC_SY200_.jpg', title: 'Flaming Pie [2 CD]'},
                {image: 'https://m.media-amazon.com/images/I/419XhUrDVHL._AC_SY200_.jpg', title: 'Palo Alto'},
                {image: 'https://m.media-amazon.com/images/I/3171Wz9swzL._AC_SY200_.jpg', title: 'Ring Stick Up Cam Battery HD security camera with custom privacy controls, simple setup, ...'},
                {image: 'https://m.media-amazon.com/images/I/513KDoQwhBL._AC_SY200_.jpg', title: 'Blood On The Tracks'},
                {image: 'https://m.media-amazon.com/images/I/31g8lwZaW5L._AC_SY200_.jpg', title: 'Ring Indoor Cam, Compact Plug-In HD security camera with two-way talk, Works with Alexa - Black'},
                {image: 'https://m.media-amazon.com/images/I/41CqltKTNTL._AC_SY200_.jpg', title: 'Us + Them'},
                {image: 'https://m.media-amazon.com/images/I/51YRyjVtq0L._AC_SY200_.jpg', title: 'Idiot Prayer: Nick Cave Alone at Alexandra Palace'},
                {image: 'https://m.media-amazon.com/images/I/51l2D8UUaCL._AC_SY200_.jpg', title: 'Whoosh!'},
                {image: 'https://m.media-amazon.com/images/I/21FcxiCDcAL._AC_SY200_.jpg', title: 'Ring Alarm Contact Sensor (2nd Gen)'},

            ],

            ideasItems: [
                {image: 'https://images-na.ssl-images-amazon.com/images/I/51zQ-3DM0cL._AC_SY220_.jpg', titile: ''},
                {image: 'https://images-na.ssl-images-amazon.com/images/I/914BkUIvk0L._AC_SY220_.jpg', titile: ''},
                {image: 'https://images-na.ssl-images-amazon.com/images/I/71e6E6wDe2L._AC_SY220_.jpg', titile: ''},
                {image: 'https://images-na.ssl-images-amazon.com/images/I/61R0UR4noWL._AC_SY220_.jpg', titile: ''},
                {image: 'https://images-na.ssl-images-amazon.com/images/I/81dUVKQDBEL._AC_SY220_.jpg', titile: ''},
                {image: 'https://images-na.ssl-images-amazon.com/images/I/916%2BSa-QK4L._AC_SY220_.jpg', titile: ''},
                {image: 'https://images-na.ssl-images-amazon.com/images/I/41yEcCwTXaL._AC_SY220_.jpg', titile: ''},
                {image: 'https://images-na.ssl-images-amazon.com/images/I/81VIHJFXQPL._AC_SY220_.jpg', titile: ''},
            ]
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
                        <ProductItem 
                            title="Save 50% on Prime with EBT"
                            img="https://images-na.ssl-images-amazon.com/images/G/01/GW_HUD/PrimeSpanishLoP/GW_Cards/1248314-delivery-758x608-1x._SY304_CB406258296_.jpg"
                            footer="More information"
                        />
                        <ProductItem 
                            title="Prime delivers food to you"
                            img="https://images-na.ssl-images-amazon.com/images/G/01/GW_HUD/PrimeSpanishLoP/GW_Cards/1248314-grocery-758x608-1x._SY304_CB406258296_.jpg"
                            footer="More information Restrictions apply."
                        />
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
                        <ProductItem 
                            title="Top rated space heaters"
                            img="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MTUxNjRmMTYt/MTUxNjRmMTYt-YTA4NzYxMWIt-w379._SY304_CB413105482_.jpg"
                            footer="See more"
                        />
                    </StyledRow>
                    <MultiItemCarousel
                        title="Related to the items you saw"
                        items={this.state.multiItems}
                    />
                    <MultiItemCarousel
                        title="Recommeded Items Other Customers Often Buy Again"
                        items={this.state.recommededItems}
                    />
                    <StyledRow>
                        <ProductItemGroup 
                            title="New: listen without limits"
                            items={[
                                    { image: 'https://images-na.ssl-images-amazon.com/images/G/01/img20/events/NYE21/XCM_Manual_1301764_1538988_US_NYNY_xcm_banners_01_us_nyny21_hp_desk_dashquad_activewear_us_en_3626524_186x116_1X_en_US._SY116_CB412524972_.jpg', description: 'Sportswear'},
                                    { image: 'https://images-na.ssl-images-amazon.com/images/G/01/img20/events/NYE21/XCM_Manual_1301764_1538988_US_NYNY_xcm_banners_01_us_nyny21_hp_desk_dashquad_launchpad_us_en_3626536_186x116_1X_en_US._SY116_CB412524972_.jpg', description: 'Amazon Launchpad'},
                                    { image: 'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/NYNY/Homepage/xcm_banners_01_us_nyny21_hp_desk_dashquad_our-brands_v2_372x232_us-en.jpg._SY116_CB413009386_.jpg', description: 'Our brands'},
                                    { image: 'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/NYNY/Homepage/xcm_banners_01_us_nyny21_hp_desk_dashquad_beauty_v2_372x232_us-en.jpg._SY116_CB413014766_.jpg', description: 'Beauty and Personal Care'},
                                ]}
                            footer="More information"
                        />
                        <ProductItem 
                            title="Be a champion in food"
                            img="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Certified_Refurbished/XCM_Manual_1289308_1490433_US_NYNY_us_nyny_2020_gw_us_en_3555756_379x304_2X_en_US._SY304_CB415555964_.jpg"
                            footer="Buy from Amazon Renewed"
                        />
                        <ProductItemGroup 
                            title="New: listen without limits"
                            items={[
                                    { image: 'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/NYNY/Homepage/xcm_banners_01_us_nyny21_hp_desk_dashquad_health-and-wellness_v2_372x232_us-en.jpg._SY116_CB413014636_.jpg', description: 'Health & Wellness'},
                                    { image: 'https://images-na.ssl-images-amazon.com/images/G/01/img20/events/NYE21/XCM_Manual_1301764_1538988_US_NYNY_xcm_banners_01_us_nyny21_hp_desk_dashquad_home_and_kitchen_us_en_3626532_186x116_1X_en_US._SY116_CB412524972_.jpg', description: 'Home Renovation'},
                                    { image: 'https://images-na.ssl-images-amazon.com/images/G/01/img20/events/NYE21/XCM_Manual_1301764_1538988_US_NYNY_xcm_banners_01_us_nyny21_hp_desk_dashquad_fitness_us_en_3626528_186x116_1X_en_US._SY116_CB412524972_.jpg', description: 'Fitness at Home'},
                                    { image: 'https://images-na.ssl-images-amazon.com/images/G/01/img20/events/NYE21/XCM_Manual_1301764_1538988_US_NYNY_xcm_banners_01_us_nyny21_hp_desk_dashquad_sports_and_outddors_us_en_3626540_186x116_1X_en_US._SY116_CB412524972_.jpg', description: 'Sports and Outdoors'},
                                ]}
                            footer="Buy New Year, New You"
                        />
                        <ProductItemGroup 
                            title="More motivation for less"
                            items={[
                                    { image: 'https://m.media-amazon.com/images/I/514SrIfhE0L._AC_SY119_.jpg', description: ''},
                                    { image: 'https://m.media-amazon.com/images/I/51ScJsPe1GL._AC_SY119_.jpg', description: ''},
                                    { image: 'https://m.media-amazon.com/images/I/51bEg+E4y0L._AC_SY119_.jpg', description: ''},
                                    { image: 'https://m.media-amazon.com/images/I/61ZEu5xukIL._AC_SY119_.jpg', description: ''},
                                ]}
                            footer="Buy now"
                        />
                    </StyledRow>
                </StyledProductsContent>
                <MultiItemCarousel
                    title=""
                    items={this.state.ideasItems}
                />
			</StyledProducts>

		);
	}
}

export default Products;
