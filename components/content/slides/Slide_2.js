import { useRouter } from 'next/router'
import {en, ru, ua} from '../../../translations/Slide2'
import Link from 'next/link'

function Slide2() {

	let router = useRouter()
	let curloc = router.locale === 'en' ? en : router.locale === 'ru' ? ru : router.locale === 'ua' ? ua : ''

	return (
		<div className="container__slide">
		<div className="container__text">
			<span className="container__header">
			<h1 data-swiper-parallax={ -70 }>{curloc.h1}</h1>
			<h2 data-swiper-parallax={ -20 }>{curloc.h2}</h2>
			</span>
			<Link href="/services/6"><a>
			<span className="Slide1__button">
				<div className="icon"><img src="/images/arrow.svg" /></div>
				<div className="text">{curloc.button}</div>
			</span>
			</a></Link>
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