import React, { memo, useContext } from "react";
import Button from "components/common/button";
import { MyContext } from "src/contexts/MyContext";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Pagination, Navigation]);


const Home = () => {
	const { langData, locale } = useContext(MyContext);
	const {
		customers
	} = langData;


	return (
		<div className="home-page">
			<section className="customers bg-green section-padding">
				abc
			</section>
		</div>
	);
};

export default memo(Home);
