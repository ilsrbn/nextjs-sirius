function Partnery() {
	return (
		<div
			className="Partnery slide">
			<div className="image__container" data-swiper-parallax={ -50 }>
				<div className="cyan" />
				<img
					src="/images/dots/3x8.png"
					className="dots" />
				<img 
					src="/images/odrex.png"
					className="picha" />
			</div>
			<div className="container__text">
				<a href="https://odrex.ua/">
					<img
						src="images/odrex__logo.png"
						className="odrex__logo"
						data-swiper-parallax={ -80 } />
				</a>
				<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					Медицинский дом Odrex - это ведушая многопрофильная частная клиника Одессы,
					созданная с учетом успешного опыта мировой медицины для оказания профессиональной
					медицинской помощи взрослым и детям. Сегодня медицнский дом Odrex не имеет аналогов
					на юге Украины по уровню оснащения и качеству оказываемых услуг.
				</p>
				<a href="https://odrex.ua" rel="noreferrer"><span className="Slide1__button">
					<div className="icon">&rarr;</div>
					<div className="text">ПЕРЕЙТИ НА САЙТ</div>
				</span></a>
			</div>
		</div>)

}

export default Partnery;