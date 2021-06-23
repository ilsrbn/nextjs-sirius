import Link from 'next/link'
import Header from '../../components/Header'
import Services_Sidebar from '../../components/Services_Sidebar'

import { useRouter } from 'next/router'

import React, { useState } from 'react'

import {en, ru, ua} from '../../translations/6'


function SixthService() {

	const [burger, setBurger] = useState(true);
	const changeBurger = () => {
		setBurger(!burger)
	}

	let router = useRouter()
	let curloc = router.locale === 'en' ? en : router.locale === 'ru' ? ru : router.locale === 'ua' ? ua : ''
	return (
		<>
		<Header />
		<Services_Sidebar burger={burger} changeBurger={changeBurger} />
		<div className="something Service_6">
			<div className='container__text'>
			<Link href="/#services"><a><img src="/images/arrow.svg" /></a></Link>
				<div className='morecont'>
					<h1 data-swiper-parallax={ -80 } data-swiper-parallax-opacity={ 0.1 }>{curloc.title}</h1>
					<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
						{curloc.p}
					</p>
					<ul>
					<li>{curloc.l1}</li>
					<li>{curloc.l2}</li>
					<li>{curloc.l3}</li>
					<li>{curloc.l4}</li>
					<li>{curloc.l5}</li>
					</ul>
				</div>
				
			</div>
			<div className="image__container" data-swiper-parallax={ -50 }>
				<div className="cyan" />
				<img
					src="/images/dots/3x8.png"
					className="dots" />
				<img
					src="/images/uslugi/3-min.png"
					className="picha"
					alt="Doctor" />
			</div>
		</div>
		< />
		)
}

export default SixthService;