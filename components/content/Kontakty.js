import { useRouter } from 'next/router'
import {en, ru, ua} from '../../translations/Contacts'

function Kontakty() {

	let router = useRouter()
	let curloc = router.locale === 'en' ? en : router.locale === 'ru' ? ru : router.locale === 'ua' ? ua : ''

	return (
		<div
			className="Kontakty slide">
			<div className="image__container" data-swiper-parallax={ -50 }>
				<div className="cyan" />
				<img
					src="/images/dots/6x9.png"
					className="dots" />
				<iframe className="picha" width="600" height="450" style={{border:0}} loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJD4JjMvcxxkARiid4SmxTdPE&key=AIzaSyBGR_WGfILtv2dL1zwgHk00hz3e_NpzYRU">
				</iframe>
			</div>
			<div className="bigContainer">
			<div className="container__text firstContainer">
				<h1 data-swiper-parallax={ -80 } data-swiper-parallax-opacity={ 0.1 }>{curloc.h1}<h2>{curloc.h2}</h2></h1>
				<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					{curloc.adress1}
				</p>
				<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					{curloc.adress2}
				</p>
				<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					<a href="tel:+380-66-736-37-44" className="number">
					{curloc.phone}
					</a>
				</p>
				<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					{curloc.email}					
				</p>
			</div>
			<div className="line" />
			<div className="container__text secondContainer">
				<h1 data-swiper-parallax={ -80 } data-swiper-parallax-opacity={ 0.1 }>{curloc.h11}<h2>{curloc.h22}</h2></h1>
				<div className="table">
					<div className="date">
						<p>{curloc.monday}</p>
						<p>{curloc.tuesday}</p>
						<p>{curloc.wednesday}</p>
						<p>{curloc.thursday}</p>
						<p>{curloc.friday}</p>
					</div>
					<div className="time">
						<p>{curloc.time}</p>
						<p>{curloc.time}</p>
						<p>{curloc.time}</p>
						<p>{curloc.time}</p>
						<p>{curloc.time}</p>
					</div>
				</div>
			</div>
			</div>
			<div className="footer">
			<div className="text">{curloc.footer}</div>
				<div className="links">
				<a href="" rel="noreferrer">{curloc.main}</a>
				<a href="#about" rel="noreferrer">{curloc.about}</a>
				<a href="#partners" rel="noreferrer">{curloc.partners}</a>
				<a href="#services" rel="noreferrer">{curloc.services}</a>
				<a href="#team" rel="noreferrer">{curloc.team}</a>
				</div>
			</div>
		</div>)

}

export default Kontakty;