import Popup from './Popup'

import React , { useState } from 'react'
import Link from 'next/link'


import {en, ru, ua} from '../translations/Header'
import { useRouter } from 'next/router'

function Header() {

	let router = useRouter();

	let curloc = router.locale === 'en' ? en : router.locale === 'ru' ? ru : router.locale === 'ua' ? ua : ''

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
		 		</div>
		 		<span />
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