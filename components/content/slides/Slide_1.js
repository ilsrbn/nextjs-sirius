function Slide1() {
	return (
		<div className="container__slide">
			<div className="container__text">
				<h1 data-swiper-parallax='20%' data-swiper-parallax-opacity={ 0.2 }>СОВРЕМЕННЫЕ</h1>
				<h1 data-swiper-parallax='40%' data-swiper-parallax-opacity={ 0.5 }>РЕШЕНИЯ ЛЕЧЕНИЯ</h1>
				<h2 data-swiper-parallax='60%' data-swiper-parallax-opacity={ 0.7 }>SIRIUS DENT<p>.</p></h2>
				<span className="Slide1__button">
					<div className="icon">&rarr;</div>
					<div className="text">ЧИТАТЬ ДАЛЬШЕ</div>
				</span>
			</div>
			<img
				src="/images/dots/5x4_2.png"
				className="dots" />
			<img
				src="/images/doctor.png"
				className="image__container"
				data-swiper-parallax="-20%" />
		</div>
	)
}

export default Slide1;