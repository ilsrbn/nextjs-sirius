function Slide3() {
	return (
		<div className="container__slide">
			<div className="container__text">
				<h2 data-swiper-parallax-opacity={ 0.1 } data-swiper-parallax={ -50 }>Челюстно-лицевая</h2>
				<h1 data-swiper-parallax='-20%' data-swiper-parallax-opacity={ 0.1 }>Хирургия</h1>
				<p>стань тем, кем ты захочешь</p>
				<span className="Slide1__button">
					<div className="icon">&rarr;</div>
					<div className="text">записаться</div>
				</span>
			</div>
			<div className="dots" />
			<div className="image__container" data-swiper-parallax="-20%" />
		</div>
	)
}

export default Slide3;