import { Swiper, span } from 'swiper/react';
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
			<section className="cards">
				<div
					className="column_1"
					data-swiper-parallax={-80}
					data-swiper-parallax-opacity={ 0.5 }
				>
					<span className="team__card">
						<div className="card__img img1" />
						<div className="text">
							<div className='name'>{curloc.name1}</div>
							<div className="role">{curloc.role1}</div>
						</div>
					</span>
				</div>
				<div
					className="column_2"
					data-swiper-parallax={-130}
					data-swiper-parallax-opacity={ 0.5 }>
					<span className="team__card">
						<div className="card__img img2" />
						<div className="text">
							<div className='name'>{curloc.name2}</div>
							<div className="role">{curloc.role2}</div>
						</div>
					</span>
					<span className="team__card">
						<div className="card__img img3" />
						<div className="text">
							<div className='name special_name'>{curloc.name3}</div>
							<div className="role">{curloc.role3}</div>
						</div>
					</span>
					<span className="team__card">
						<div className="card__img img4" />
						<div className="text">
							<div className='name'>{curloc.name4}</div>
							<div className="role">{curloc.role4}</div>
						</div>
					</span>
					<span className="team__card">
						<div className="card__img img5" />
						<div className="text">
							<div className='name'>{curloc.name5}</div>
							<div className="role">{curloc.role5}</div>
						</div>
					</span>
				</div>
			</section>		
		</div>)

}

export default Komanda;