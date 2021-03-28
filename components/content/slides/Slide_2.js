function Slide2() {
	return (
		<div className="container__slide">
		<div className="container__text">
			<h1 data-swiper-parallax={ -70 }>Детская</h1>
			<h2 data-swiper-parallax={ -20 }>Стоматология<p>.</p></h2>
			<span className="Slide1__button">
				<div className="icon">&rarr;</div>
				<div className="text">ПОПРОБОВАТЬ</div>
			</span>
		</div>
		<img
				src="/images/dots/5x4_2.png"
				className="dots" />
		<img
			src="/images/uslugi/3-min.jpg"
			className="image__container"
			data-swiper-parallax="-20%" />
		</div>
	)
}

export default Slide2;