import { useRouter } from 'next/router'
import {en, ru, ua} from '../../translations/oNas'


function ONas() {

	let router = useRouter()
	let curloc = router.locale === 'en' ? en : router.locale === 'ru' ? ru : router.locale === 'ua' ? ua : ''

	return (
		<div
			className="ONas slide">
			<div className="image__container" data-swiper-parallax={ -50 }>
				<div className="cyan" />
				<img 
					src="/images/dots/3x8.png"
					className="dots" />
				<img
					src="/images/shprits.png"
					className="picha" />
			</div>
			<div className="container__text">
				<h1 data-swiper-parallax={ -80 } data-swiper-parallax-opacity={ 0.1 }>{curloc.h1}<h2>{curloc.h2}</h2></h1>
				<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					{curloc.p}
				</p>
			</div>
		</div>)

}

export default ONas;