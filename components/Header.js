import Image from 'next/image'

import CallIcon from '@material-ui/icons/Call'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'

function Header() {
	return (
		<div className="header">
			<div className="logo">
				<Image
		 			src="/images/siriusdentodessa.jpg"
		 			alt="logo"
		 			layout="fill"
		 		 />
		 	</div>
		 	<div className="buttons">
		 		<CallIcon className="CallIcon" />
		 		<div className="phoneNumber">+38 066 125 86 31</div>
		 		<div className="emergency">ЭКСТРЕННАЯ ПОМОЩЬ</div>
		 		<a href="https://t.me/HOPPER124" rel="noreferrer"><FacebookIcon className="FacebookIcon" /></a>
		 		<a href="https://t.me/HOPPER124" rel="noreferrer"><InstagramIcon className="InstagramIcon" /></a>
		 		<a href="https://t.me/HOPPER124" rel="noreferrer"><YouTubeIcon className="YouTubeIcon" /></a>
		 	</div>
		 </div>
		)
}

export default Header;