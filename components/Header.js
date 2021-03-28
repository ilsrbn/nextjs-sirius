import Popup from 'reactjs-popup';

function Header() {
	return (
		<div className="header">
			<div className="logo" />
			<div className="buttons">
		 		<img
		 			src="/images/phone.svg" 
		 			className="CallIcon" />
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
		)
}

export default Header;