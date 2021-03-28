function Kontakty() {
	return (
		<div
			className="Kontakty slide">
			<div className="image__container" data-swiper-parallax={ -50 }>
				<div className="cyan" />
				<img
					src="/images/dots/6x9.png"
					className="dots" />
				<img
					src="/images/map.png"
					alt="Map"
					className="picha" />
			</div>
			<div className="bigContainer">
			<div className="container__text firstContainer">
				<h1 data-swiper-parallax={ -80 } data-swiper-parallax-opacity={ 0.1 }>К<h2>ОНТАКТЫ</h2>.</h1>
				<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					г. Одесса, ул. Коблевская 31
				</p>
				<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					г. Одесса, ул. Раскидайловская 69
				</p>
				<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					тел. +38 066 125 86 31
				</p>
				<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					e-mail: sirius_dent@gmail.com
				</p>
			</div>
			<div className="line" />
			<div className="container__text secondContainer">
				<h1 data-swiper-parallax={ -80 } data-swiper-parallax-opacity={ 0.1 }>Г<h2>РАФИК</h2>.</h1>
				<div className="table">
					<div className="date">
						<p>Понедельник</p>
						<p>Вторник</p>
						<p>Среда</p>
						<p>Четверг</p>
						<p>Пятница</p>
					</div>
					<div className="time">
						<p>8:00 - 18:00</p>
						<p>8:00 - 18:00</p>
						<p>8:00 - 18:00</p>
						<p>8:00 - 18:00</p>
						<p>8:00 - 18:00</p>
					</div>
				</div>
			</div>
			</div>
			<div className="footer">
			<div className="text">SIRIUS-DENT 2021</div>
				<div className="links">
				<a href="#main" rel="noreferrer">ГЛАВНАЯ</a>
				<a href="#about" rel="noreferrer">О НАС</a>
				<a href="#partners" rel="noreferrer">ПАРТНЕРЫ</a>
				<a href="#services" rel="noreferrer">УСЛУГИ</a>
				<a href="#team" rel="noreferrer">КОМАНДА</a>
				</div>
			</div>
		</div>)

}

export default Kontakty;