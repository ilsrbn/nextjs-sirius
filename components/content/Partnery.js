import { useRouter } from 'next/router'
import {en, ru, ua} from '../../translations/Partners'

function Partnery() {

	let router = useRouter()
	let curloc = router.locale === 'en' ? en : router.locale === 'ru' ? ru : router.locale === 'ua' ? ua : ''

	return (
		<div
			className="Partnery slide">
			<div className="image__container" data-swiper-parallax={ -50 }>
				<div className="cyan" />
				<img
					src="/images/dots/3x8.png"
					className="dots" />
				<img 
					src="/images/odrex.png"
					className="picha" />
			</div>
			<div className="container__text">
				<a href="https://odrex.ua/" rel="noreferrer">
					<img
						src="images/odrex__logo.png"
						className="odrex__logo"
						data-swiper-parallax={ -80 } />
				</a>
				<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					{curloc.p}
				</p>
				<a href="https://odrex.ua" rel="noreferrer"><span className="Slide1__button">
					<div className="icon"><img src="/images/arrow.svg" /></div>
					<div className="text">{curloc.button}</div>
				</span></a>
			</div>
		</div>)

}

export default Partnery;