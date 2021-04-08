import Link from 'next/link'
import Header from '../../components/Header'
import Services_Sidebar from '../../components/Services_Sidebar'
import { useRouter } from 'next/router'

import {en, ru, ua} from '../../translations/1'

function FirstService() {

	let router = useRouter()
	let curloc = router.locale === 'en' ? en : router.locale === 'ru' ? ru : router.locale === 'ua' ? ua : ''
	return (
		<>
		<Header />
		<Services_Sidebar />
		<div className="something Service_1">
			<div className='container__text'>
				<Link href="/#services" locale={router.locale} className="linkBack"><a>&larr;</a></Link>
				<div className='morecont'>
				<h1 data-swiper-parallax={ -80 } data-swiper-parallax-opacity={ 0.1 }>{curloc.title}</h1>
				<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					{curloc.p}
				</p>
				</div>
				
			</div>
			<div className="image__container" data-swiper-parallax={ -50 }>
				<div className="cyan" />
				<img
					src="/images/dots/3x8.png"
					className="dots" />
				<img
					src="/images/uslugi/1-min.jpg"
					className="picha"
					alt="Doctor" />
			</div>
		</div>
		< />)
}

export default FirstService;