import React, { useState } from 'react';
import { MAIN_BANNER } from '../util/itemlist';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const MainSlide = () => {
	const [bannerIndex, setBannerIndex] = useState(0);
	const [swiperInstance, setSwiperInstance] = useState();
	const changeSlide = (realIndex) => {
		if (bannerIndex !== realIndex) {
			setBannerIndex(realIndex);
		}
	};
	const changeBtn = (index) => {
		if (bannerIndex !== index) {
			setBannerIndex(index);
			swiperInstance.slideToLoop(index);
		}
	}

	return (
		<StyledContainer>
			<StyledSwiper1
				onSwiper={(swiper) => { setSwiperInstance(swiper) }}
				onSlideChange={(swiper) => {
					changeSlide(swiper.realIndex);
				}}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				loop={true}
				spaceBetween={0}
				slidesPerView={1}>
				{MAIN_BANNER.map((el) => (
					<StyledSwiperSlide key={el.item_no}>
						<Img1
							key={el.item_no}
							src={el.src}
							alt='메인배너'
							style={{ width: "100%", height: '100%' }}
						/>
					</StyledSwiperSlide>
				))}
				<DotBox1>
					{new Array(5).fill(0).map((v, inx) => (
						<div
							key={inx}
							style={{
								padding: "5px",
								borderRadius: "50%",
								backgroundColor: inx === bannerIndex ? "rgb(255, 204, 0)" : "#ccc"
							}}
							onClick={() => { changeBtn(inx) }} />
					))}
				</DotBox1>
			</StyledSwiper1>
		</StyledContainer>
	);
};

export default MainSlide;


const StyledContainer = styled.div`
	width: 100%;
	overflow-y: auto;
	overflow-y: overlay;
	overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  letter-spacing: -3px;
  overflow-y: hidden;
  background-size: cover;
  position: relative;
  height: 100vh;
`;

const DotBox1 = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
	display: flex;
  gap: 15px;
  transform: translateX(-50%);
  z-index: 1;
`;

const StyledSwiper1 = styled(Swiper)`
  width: 100%;
  height: 100%;
  object-fit: cover;
	position: relative;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img1 = styled.img`
  object-fit: cover;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;