import Popup from './Popup'

import React , { useState } from 'react'

import Link from 'next/link'


import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

function Header() {

	let router = useRouter();

	const { t, lang } = useTranslation('common')

	const [buttonPopup, setButtonPopup] = useState(false);
	const changeState = () => {
		setButtonPopup(!buttonPopup)
	}

	return (
		<div className="solomon">
			<div className="header">
				<ul>
					{router.locales.map((locale) => (
						<li key={locale}>
							<Link href={router.asPath} locale={locale}>
								<a>{locale}</a>
							</Link>
						</li>
						))}
				</ul>
				<div className="logo" />
				<div className="buttons">
		 			<img
		 				src="/images/phone.svg" 
		 				className="CallIcon" />
		 			<div className="phoneNumber">+38 066 125 86 31</div>

		 			<button
		 				className="emergency"
		 				onClick={changeState}>
		 				{t("header_1")}
					</button>

		 			<a
		 				href="https://t.me/HOPPER124"
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
		 	</div>
		 	<Popup>
					<div className={buttonPopup ? 'active-popup' : 'deactivated-popup'}>
						<div className="popup-outer" onClick={changeState} />
						<div className="popup-inner">
							<div className="popup-title">
		 						<button onClick={changeState} className="close-btn">&times;</button>
		 						<p>
		 						ЭКСТРЕННАЯ
		 						СТОМАТОЛОГИЧЕСКАЯ ПОМОЩЬ
		 						</p>
		 					</div>
		 					<div className="popup-content">
		 						Круглосуточно оказываем неотложную помощь всем пациентам с острой зубной болью
		 						и челюстно-лицевыми травмами.
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