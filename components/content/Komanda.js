import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Keyboard } from 'swiper';

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
					<img
						src="/images/doctors/1.png"
						className="portrait portrait_1"
						alt="Валькевич Денис Вячеславович. Главный врач, челюстно-лицевой хирург, стоматолог-ортопед, хирург-имплантолог" />
					<div className="text">
						<span className="tire" />
						<div className='name'>Валькевич Денис Вячеславович</div>
					</div>
					<div className="role">Главный врач, челюстно-лицевой хирург, стоматолог-ортопед, хирург-имплантолог</div>
				</SwiperSlide>
				<SwiperSlide className="team__card">
					<img
						src="/images/doctors/2.png"
						className="portrait portrait_2"
						alt="Горовая Алёна Викторовна. Стоматолог - терапевт, детский стоматолог" />
					<div className="text">
						<span className="tire" />
						<div className='name'>Горовая Алёна Викторовна</div>
					</div>
					<div className="role">Стоматолог - терапевт, детский стоматолог</div>
				</SwiperSlide>
				<SwiperSlide className="team__card">
					<img
						src="/images/doctors/3.png"
						alt="Бычковский Александр Александрович. Стоматолог - терапевт, хирург"
						className="portrait portrait_3" />
					<div className="text">
						<span className="tire" />
						<div className='name'>Бычковский Александр Александрович</div>
					</div>
					<div className="role">Стоматолог - терапевт, хирург</div>
				</SwiperSlide>
				<SwiperSlide className="team__card">
					<img 
						src="/images/doctors/4.png"
						alt="Лашина Екатерина Владимировна. Стоматолог - терапевт, детский стоматолог"
						className="portrait portrait_4" />
					<div className="text">
						<span className="tire" />
						<div className='name'>Лашина Екатерина Владимировна</div>
					</div>
					<div className="role">Стоматолог - терапевт, детский стоматолог</div>
				</SwiperSlide>
				<SwiperSlide className="team__card">
					<img
						src="/images/doctors/5.png"
						alt="Данилов Сергей Александрович. Врач - стоматолог"
						className="portrait portrait_5" />
					<div className="text">
						<span className="tire" />
						<div className='name'>Данилов Сергей Александрович</div>
					</div>
					<div className="role">Врач - стоматолог</div>
				</SwiperSlide>
				
				<div className="prevB nav-button"><span className="button-wrapper"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" fill="currentColor" /></svg></span></div>
				<div className="nextB nav-button"><span className="button-wrapper"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" fill="currentColor" /></svg></span></div>
				<div className="nab-shit"><div className="fraction"></div>
				<div className="scrollbar" /></div>
			</Swiper>

		</div>)

}

export default Komanda;