import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Keyboard } from 'swiper';

import { useRouter } from 'next/router'
import {en, ru, ua} from '../../translations/Team'


function Komanda() {

	let router = useRouter()
	let curloc = router.locale === 'en' ? en : router.locale === 'ru' ? ru : router.locale === 'ua' ? ua : ''

	SwiperCore.use([Navigation, Pagination, Scrollbar, Keyboard]);

	return (
		<div className="Komanda slide">
			<div className="container__text">
				<h1
					data-swiper-parallax-opacity={ 0.1 }
					data-swiper-parallax={ -80 }>{curloc.h1}<h2>{curloc.h2}</h2></h1>
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
						<div className='name'>{curloc.name1}</div>
					</div>
					<div className="role">{curloc.role1}</div>
				</SwiperSlide>
				<SwiperSlide className="team__card">
					<img
						src="/images/doctors/2.png"
						className="portrait portrait_2"
						alt="Горовая Алёна Викторовна. Стоматолог - терапевт, детский стоматолог" />
					<div className="text">
						<span className="tire" />
						<div className='name'>{curloc.name2}</div>
					</div>
					<div className="role">{curloc.role2}</div>
				</SwiperSlide>
				<SwiperSlide className="team__card">
					<img
						src="/images/doctors/3.png"
						alt="Бычковский Александр Александрович. Стоматолог - терапевт, хирург"
						className="portrait portrait_3" />
					<div className="text">
						<span className="tire" />
						<div className='name'>{curloc.name3}</div>
					</div>
					<div className="role">{curloc.role3}</div>
				</SwiperSlide>
				<SwiperSlide className="team__card">
					<img 
						src="/images/doctors/4.png"
						alt="Лашина Екатерина Владимировна. Стоматолог - терапевт, детский стоматолог"
						className="portrait portrait_4" />
					<div className="text">
						<span className="tire" />
						<div className='name'>{curloc.name4}</div>
					</div>
					<div className="role">{curloc.role4}</div>
				</SwiperSlide>
				<SwiperSlide className="team__card">
					<img
						src="/images/doctors/5.png"
						alt="Данилов Сергей Александрович. Врач - стоматолог"
						className="portrait portrait_5" />
					<div className="text">
						<span className="tire" />
						<div className='name'>{curloc.name5}</div>
					</div>
					<div className="role">{curloc.role5}</div>
				</SwiperSlide>
				
				<div className="prevB nav-button"><span className="button-wrapper"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" fill="currentColor" /></svg></span></div>
				<div className="nextB nav-button"><span className="button-wrapper"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" fill="currentColor" /></svg></span></div>
				<div className="nab-shit"><div className="fraction"></div>
				<div className="scrollbar" /></div>
			</Swiper>

		</div>)

}

export default Komanda;