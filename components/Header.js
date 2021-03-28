import CallIcon from '@material-ui/icons/Call'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'

import Image from 'next/image'
import Popup from 'reactjs-popup';

function Header() {
	return (
		<div className="header">
			<div className="logo" />
			<div className="buttons">
		 		<CallIcon className="CallIcon" />
		 		<div className="phoneNumber">+38 066 125 86 31</div>
		 		<Popup trigger={<div className="emergency">ЭКСТРЕННАЯ ПОМОЩЬ</div>} modal>
		 			<span className="modal">
		 				<div className="popup-title">
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
		 			</span>
		 		</Popup>
		 		<a href="https://t.me/HOPPER124" rel="noreferrer"><FacebookIcon className="FacebookIcon" /></a>
		 		<a href="https://t.me/HOPPER124" rel="noreferrer"><InstagramIcon className="InstagramIcon" /></a>
		 		<a href="https://t.me/HOPPER124" rel="noreferrer"><YouTubeIcon className="YouTubeIcon" /></a>
		 	</div>
		 </div>
		)
}

export default Header;