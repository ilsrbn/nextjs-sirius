import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Parallax, Autoplay, Keyboard , Pagination } from 'swiper';

import Slide1 from './slides/Slide_1';
import Slide2 from './slides/Slide_2';
import Slide3 from './slides/Slide_3';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Glavnaya() {
	SwiperCore.use([Navigation, Parallax, Autoplay, Keyboard, Pagination]);
	const slides_description = ['СОВРЕМЕННЫЕ РЕШЕНИЯ ЛЕЧЕНИЯ', 'ДЕТСКАЯ СТОМАТОЛОГИЯ', 'ЧЕЛЮСТНО-ЛИЦЕВАЯ ХИРУРГИЯ'];
	return (
		<Swiper
			className="Glavnaya slide"

			data-swiper-parallax={ -50 }

			simulateTouch={ false }
			autoplay
			parallax={ true }
			keyboard={{
				enabled: true,
				onlyInViewport: true
			}}

			navigation= {{
				nextEl: '.next',
				prevEl: '.prev'
			}}

			speed={ 800 }

			pagination ={{
				el: ".nav__button__pagination",
				type: 'custom',
				renderCustom: (swiper, current, total) => {
					return '<span class="number">0' + current + '</span><span class="description">' + slides_description[current - 1] + '</span>';
				}
			}}>
		<SwiperSlide className="slide1">
			<Slide1 />
		</SwiperSlide>
		<SwiperSlide className="slide2">
			<Slide2 />
		</SwiperSlide>
		<SwiperSlide className="slide3">
			<Slide3 />
		</SwiperSlide>
		<div className="nav__button__accesoir"></div>
		<div className="prev nav__button"><ArrowForwardIosIcon /></div>
		<div className="next nav__button"><ArrowForwardIosIcon /></div>
		<div className="nav__button__pagination"></div>
		</Swiper>
		)

}

export default Glavnaya;