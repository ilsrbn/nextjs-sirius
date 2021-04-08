import { useRouter } from 'next/router'
import {en, ru, ua} from '../../../translations/Slide2'

function Slide2() {

	let router = useRouter()
	let curloc = router.locale === 'en' ? en : router.locale === 'ru' ? ru : router.locale === 'ua' ? ua : ''

	return (
		<div className="container__slide">
		<div className="container__text">
			<h1 data-swiper-parallax={ -70 }>{curloc.h1}</h1>
			<h2 data-swiper-parallax={ -20 }>{curloc.h2}</h2>
			<span className="Slide1__button">
				<div className="icon">&rarr;</div>
				<div className="text">{curloc.button}</div>
			</span>
		</div>
		<img
				src="/images/dots/5x4_2.png"
				className="dots" />
		<img
			src="/images/uslugi/3-min.jpg"
			className="image__container"
			data-swiper-parallax="-20%" />
		</div>
	)
}

export default Slide2;