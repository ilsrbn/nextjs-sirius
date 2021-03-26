import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Keyboard } from 'swiper';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Komanda() {
	SwiperCore.use([Navigation, Pagination, Scrollbar, Keyboard]);
	return (
		<div className="Komanda slide">
			<div className="container__text">
				<h1
					data-swiper-parallax-opacity={ 0.1 }
					data-swiper-parallax={ -80 }>К<h2>ОМАНДА</h2>.</h1>
			</div>
			<Swiper
				className="team__slider"

				data-swiper-parallax={ -40 }

				navigation={ {
					nextEl: ".nextB",
					prevEl: ".prevB"
				} }

				keyboard={ {
					enabled: true,
					onlyInViewport: true
				} }

				scrollbar={ {
					el: ".scrollbar",
					draggable: true
				} }
				pagination={ {
					type: 'fraction',
					el: '.fraction'
				} }

				slidesPerView='auto'
				slidesPerGroup={ 2 }
				autoplay={ true }
				simulateTouch={ false }
				watchOverflow={ false }
				observer={ true }
				observeSlideChildren={ true }
				observeParents={ true }
				>
				<SwiperSlide className="team__card main_card">
					<div className="portrait portrait_1" />
					<div className="text">
						<span className="tire" />
						<div className='name'>Валькевич Денис Вячеславович</div>
					</div>
					<div className="role">Главный врач, челюстно-лицевой хирург, стоматолог-ортопед, хирург-имплантолог</div>
				</SwiperSlide>
				<SwiperSlide className="team__card">
					<div className="portrait portrait_2" />
					<div className="text">
						<span className="tire" />
						<div className='name'>Горовая Алёна Викторовна</div>
					</div>
					<div className="role">Стоматолог - терапевт, детский стоматолог</div>
				</SwiperSlide>
				<SwiperSlide className="team__card">
					<div className="portrait portrait_3" />
					<div className="text">
						<span className="tire" />
						<div className='name'>Бычковский Александр Александрович</div>
					</div>
					<div className="role">Стоматолог - терапевт, хирург</div>
				</SwiperSlide>
				<SwiperSlide className="team__card">
					<div className="portrait portrait_4" />
					<div className="text">
						<span className="tire" />
						<div className='name'>Лашина Екатерина Владимировна</div>
					</div>
					<div className="role">Стоматолог - терапевт, детский стоматолог</div>
				</SwiperSlide>
				<SwiperSlide className="team__card">
					<div className="portrait portrait_5" />
					<div className="text">
						<span className="tire" />
						<div className='name'>Данилов Сергей Александрович</div>
					</div>
					<div className="role">Врач - стоматолог</div>
				</SwiperSlide>
				
				<div className="prevB nav-button"><span className="button-wrapper"><ArrowForwardIosIcon /></span></div>
				<div className="nextB nav-button"><span className="button-wrapper"><ArrowForwardIosIcon /></span></div>
				<div className="nab-shit"><div className="fraction"></div>
				<div className="scrollbar" /></div>
			</Swiper>

		</div>)

}

export default Komanda;