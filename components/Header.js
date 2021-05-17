import Popup from './Popup'

import React , { useState } from 'react'
import Link from 'next/link'


import {en, ru, ua} from '../translations/Header'
import { useRouter } from 'next/router'

function Header() {

	let router = useRouter();
	let curloc = router.locale === 'en' ? en : router.locale === 'ru' ? ru : router.locale === 'ua' ? ua : ''
	let curloc_str = router.locale

	const [languagePopup, setLanguagePopup] = useState(false)
	const changeLanguage = () => {
		setLanguagePopup(!languagePopup)
	}

	const [buttonPopup, setButtonPopup] = useState(false);
	const changeState = () => {
		setButtonPopup(!buttonPopup)
	}

	return (
		<div className="solomon">
			<div className="header">
				<img className="logo" src={curloc.image} />
				<div className="buttons">
		 			<img
		 				src="/images/phone.svg" 
		 				className="CallIcon" />
		 			<div className="phoneNumber">+38 066 125 86 31</div>

		 			<button
		 				className="emergency"
		 				onClick={changeState}>
		 				{curloc.emergency}
					</button>

		 			<a
		 				href="https://www.facebook.com/siriusdentclinic/"
		 				rel="noreferrer">
		 				<img
		 					src="/images/facebook.svg" 
		 					className="FacebookIcon"
		 					alt="Facebook icon" />
		 			</a>
		 			<a
		 				href="https://t.me/HOPPER124"
		 				rel="noreferrer">
		 				<img 
		 					src="/images/instagram.svg"
		 					alt="Instagram icon"
		 					className="InstagramIcon" />
		 			</a>
		 			<a
		 				href="https://t.me/HOPPER124"
		 				rel="noreferrer">
		 				<img
		 					src="/images/youtube.svg"
		 					alt="Youtube Icon"
		 					className="YouTubeIcon" />
		 			</a>
		 			<ul className="language_selector">
						<li className={'ru' == curloc_str ? 'active_locale' : 'disabled_locale'}>
							<a href={'/ru' + router.pathname}>РУС</a>
							<span className="delimiter">|</span>
						</li>
						<li className={'en' == curloc_str ? 'active_locale' : 'disabled_locale'}>
							<a href={'/en' + router.pathname}>EN</a>
							<span className="delimiter">|</span>
						</li>
						<li className={'ua' == curloc_str ? 'active_locale' : 'disabled_locale'}>
							<a href={'/ua' + router.pathname}>УКР</a>
						</li>
					</ul>
					<div className="language_selector__mobile">
						<span onClick={changeLanguage} className="current_loc">
							{curloc_str}
						</span>
						<ul className={languagePopup ? "other_locs-active" : "other_locs"}>
							<li className={'en' == curloc_str ? 'active_locale' : 'disabled_locale'}>
								<a href={'/en' + router.pathname}>EN</a>
							</li>
							<li className={'ua' == curloc_str ? 'active_locale' : 'disabled_locale'}>
								<a href={'/ua' + router.pathname}>УКР</a>
							</li>
							<li className={'ru' == curloc_str ? 'active_locale' : 'disabled_locale'}>
								<a href={'/ru' + router.pathname}>РУС</a>
							</li>
						</ul>
					</div>
		 		</div>
		 	</div>
		 	<Popup>
					<div className={buttonPopup ? 'active-popup' : 'deactivated-popup'}>
						<div className="popup-outer" onClick={changeState} />
						<div className="popup-inner">
							<div className="popup-title">
		 						<button onClick={changeState} className="close-btn">&times;</button>
		 						<p>
		 						{curloc.popup.title}
		 						</p>
		 					</div>
		 					<div className="popup-content">
		 						{curloc.popup.content}
		 					</div>
		 					<div className="popup-phone">
		 						+38 066 125 86 31
		 					</div>
						</div>
		 			</div>
				</Popup>
				</div>
		)
}

export default Header;