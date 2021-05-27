import Link from 'next/link'

import { useRouter } from 'next/router'
import {en, ru, ua} from '../../translations/Uslugi'

function Uslugi() {

	let router = useRouter()
	let curloc = router.locale === 'en' ? en : router.locale === 'ru' ? ru : router.locale === 'ua' ? ua : ''

	return (
		<div className="Uslugi slide">
			<div className="container__text" data-swiper-parallax={ -80 } data-swiper-parallax-opacity={ 0.1 }>
				<h1>{curloc.h1}<h2>{curloc.h2}</h2></h1>
			</div>
			<div className="sheet">
			<div className="Cards__main-container">
				<div className="couple-of-cards firstCouple">
					<Link href="/services/1">
						<a>
						<div className="card firstCard">
							<img
								src="/images/icon_1.svg" className="card__icon" />
							<div className="card__text">{curloc.s1}</div>
						</div>
						</a>
					</Link>
					<Link href="/services/2">
					<a>
						<div className="card secondCard">
							<img
								src="images/icon_2.svg"
								className="card__icon" />
							<div className="card__text">{curloc.s2}</div>
						</div>
					</a>
					</Link>
				</div>
				<div className="couple-of-cards secondCouple">
					<Link href="/services/3">
					<a>
						<div className="card firstCard">
							<img
								src="/images/icon_3.svg"
								className="card__icon" />
							<div className="card__text">{curloc.s3}</div>
						</div>
					</a>
					</Link>
					<Link href="/services/4">
					<a>
						<div className="card secondCard">
							<img
								src="/images/icon_4.svg"
								className="card__icon" />
							<div className="card__text">{curloc.s4}</div>
						</div>
					</a>
					</Link>
				</div>
				<div className="couple-of-cards thirdCouple">
					<Link href="/services/5">
					<a>
						<div className="card firstCard">
							<img
								src="/images/icon_5.svg"
								className="card__icon" />
							<div className="card__text">{curloc.s5}</div>
						</div>
					</a>
					</Link>
					<Link href="/services/6">
					<a>
						<div className="card secondCard">
							<img
								src="/images/icon_6.svg"
								className="card__icon" />
							<div className="card__text">{curloc.s6}</div>
						</div>
					</a>
					</Link>
				</div>
		</div>
		<div className="kakoy-to_block" data-swiper-parallax-y={ -40 }>
			<img
				src="images/dots/6x9.png"
				className="dots" />
			<img
				src="images/chel.png"
				className="pickcha" />
		</div>
		</div>
		</div>
)

}

export default Uslugi;