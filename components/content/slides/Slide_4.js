import { useRouter } from 'next/router'
import {en, ru, ua} from '../../../translations/Slide4'

function Slide4() {

	let router = useRouter()
	let curloc = router.locale === 'en' ? en : router.locale === 'ru' ? ru : router.locale === 'ua' ? ua : ''

	return (
		<div className="container__slide">
			<div className="container__text">
			<span className="container__header">
				<h1 data-swiper-parallax='-20%' data-swiper-parallax-opacity={ 0.2 }>{curloc.h1}</h1>
				<h2 data-swiper-parallax='-40%' data-swiper-parallax-opacity={ 0.5 }>{curloc.h2}</h2>
				</span>
				<span className="Slide1__button">
					<div className="icon"><img src="/images/arrow.svg" /></div>
					<div className="text">{curloc.button}</div>
				</span>
			</div>
			<img
				src="/images/dots/5x4_2.png"
				className="dots" />
			<img
				src="/images/bite.png"
				className="image__container"
				data-swiper-parallax="-20%" />
		</div>
	)
}

export default Slide4;